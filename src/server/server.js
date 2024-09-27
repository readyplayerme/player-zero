import express from 'express';
import path from 'node:path';
import { fork } from 'node:child_process';
import fs from 'node:fs';
import { prettify } from 'htmlfy';
import chalk from 'chalk';
import { injectLivereloader } from '../../.ancros/render.js';

const port = process.env.PORT || 3001;
process.env.URL = process.env.URL || 'http://localhost:' + port;
const app = express();
let server = app;

// jtsx-loader server
app.use('/assets', express.static(path.resolve('./client/assets')));

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

let renderCount = 0;
const render = async (data = {}) => {
    console.time('Render');
    const fileName = 'index.jsx';
    //TODO: Обработка ошибок синтаксиса?
    const JSXComp = (await import('../pages/' + fileName + `?reload`)).default;
    // console.log('JSXComp', JSXComp.toString());
    const rendered = await injectLivereloader(await JSXComp(data));
    console.timeEnd('Render');

    return rendered;
}

// Prerender chunks on cold start
// await render();

app.get('/', async (req, res) => {
    const rendered = await render({ data: renderCount++});
    // saveHTML((process.env.BUILD_FOLDER || 'client') + '/' + 'index.jsx', rendered);
    return res.send(rendered);
});


server.listen(port, () => {
    console.log(`-------------------------------------`);
    console.log(`${chalk.bgHex('#325EE0')('Custom server:')} http://localhost:${port}`);
    console.log(`-------------------------------------`);
    process.send?.('started')
});
