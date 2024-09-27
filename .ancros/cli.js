#!/usr/bin/env node
import minimist from 'minimist';
import { spawn, exec } from 'node:child_process';
import path from 'node:path';

const [, , ...args] = process.argv;
const argv = minimist(process.argv.slice(2));

// const spawnParams = ['nodemon', ['--import', './.ancros/loader/register-hooks.mjs', './.ancros/gulp.ancros.js', 'dev']]
// const spawnParams = ['node', ['--import', './.ancros/loader/register-hooks.mjs', '--import', 'tsx', './.ancros/gulp.ancros.js', ...args]]
// const spawnParams = ['tsx', ['--import', './.ancros/loader/loaders.mjs', './.ancros/gulp.ancros.js', 'dev']]

const node = argv.debug ? 'nodemon' : 'node';
const config = [];

if (argv.debug) config.push('--config', './.ancros/nodemon.json');
config.push('--import', './.ancros/loader/register-hooks.mjs', '--import', 'tsx', './.ancros/gulp.ancros.js');

const spawnParams = [node, [...config, ...args]]
console.log(node, ...config, ...args);

const ps = spawn(...spawnParams, {
    cwd: path.resolve(),
    shell: true,
    detached: false,
    stdio: [
        'inherit',  // stdin
        'inherit',  // stdout
        'inherit'   // stderr
    ],
});