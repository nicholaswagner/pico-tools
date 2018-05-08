#! /usr/bin/env node

const path = require('path');
const dotenv = require('dotenv').config({
	path: path.resolve(process.cwd(), '.pico_tools.env')
});
const chalk = require('chalk');

var cmd = `${process.argv[2]}`;

if (process.env.PICO8 == undefined) {
	require('./bin/configure.js').run();
} else {
	switch (cmd) {
		case 'setup':
			require('./bin/configure.js').run();
			break;

		case 'build':
			require('./bin/build.js').run(`${process.argv[3]}`);
			break;

		case 'watch':
			require('./bin/watch.js').run(`${process.argv[3]}`);
			break;

		case 'vscode_tasks':
			require('./bin/vscode_tasks.js').run();
			break;

		default:
			console.log(chalk.black.bgWhite("🕹️   pico-tools v1.0.0  "));
			process.exit(1);
			break;
	}
}