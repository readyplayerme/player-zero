import express from 'express';
import path from 'node:path';
import { fork } from 'node:child_process';
import fs from 'node:fs';
import { prettify } from 'htmlfy';
import chalk from 'chalk';
import { injectLivereloader } from '../../.ancros/render.js';

import bodyParser from 'body-parser';
import { Client } from '@sendgrid/client';
import 'dotenv/config';

const client = new Client();
client.setApiKey(process.env.SENDGRID_API_KEY);

const port = process.env.PORT || 3001;
process.env.URL = process.env.URL || 'http://localhost:' + port;
const app = express();
let server = app;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// jtsx-loader server
app.use('/assets', express.static(path.resolve('./_build/assets')));

const saveFile = (dir, name, data) => {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dir + '/' + name, data);
}

const saveHTML = (filePath, data) => {
    const parsed = path.parse(filePath);
    const name = parsed.name + '.html';
    data = prettify(data);
    saveFile(parsed.dir, name, data);
}

let renderCache = new Map();

let renderCount = 0;
const render = async (fileName, data = {}) => {
    console.time('Render');
    /*
    // Second cache level
    if (renderCache.get(fileName)) {
        const result = renderCache.get(fileName);
        // renderCache.delete(fileName);
        console.timeEnd('Render');
        return result;
    } */

    // First cache level only for production
    const JSXCompURL = '../pages' + fileName + (process.env.NODE_ENV === 'development' ? '?reload' : '');
    const JSXComp = (await import(JSXCompURL)).default;
    let rendered = await JSXComp(data);

    if (process.env.NODE_ENV === 'development') {
        rendered = await injectLivereloader(rendered);
    }

    // Second cache level
    // renderCache.set(fileName, rendered);

    console.timeEnd('Render');

    return rendered;
}

// Prerender chunks on cold start
// await render();

app.get('/', async (req, res) => {
    const rendered = await render('/index.jsx');
    // saveHTML((process.env.BUILD_FOLDER || 'client') + '/' + 'index.jsx', rendered);
    return res.send(rendered);
});

app.get('/refresh-cache', async (req, res) => {
    renderCache = new Map();
    return res.send('Success');
});

app.post('/api/send', async (req, res) => {
    const { email } = req.body;

    const request = {
        method: "PUT",
        url: "/v3/marketing/contacts",
        body: {
            list_ids: JSON.parse(process.env.LIST_IDS),
            contacts: [{ email }],
        },
    };

    const result = await client.request(request).catch(r => r);

    console.log('Send result:', new Date());
    console.log('Email:', email);
    
    if ((result?.statusCode || result?.[0]?.statusCode) === 202) {
        console.log('Status:', 'Success');
        return res.json({
            code: 200,
            message: 'Success'
        });
    } else {
        console.log('Status:', 'Error', result.response.body.errors[0].message);
        return res.json({
            code: 500,
            message: result.response.body.errors[0].message || 'Error on send'
        });
    }
});


server.listen(port, () => {
    console.log(`-------------------------------------`);
    console.log(`${chalk.bgHex('#325EE0')('Custom server:')} http://localhost:${port}`);
    console.log(`-------------------------------------`);
    process.send?.('started')
});
