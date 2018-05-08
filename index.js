#! /usr/bin/env node

const chalk = require('chalk');
const opn = require('opn');
const shared = require('./bin/shared.js');
const help = require('./bin/help.js');
const tasks = require('./bin/vscode_tasks.js');
const builder = require('./bin/builder.js');
const watcher = require('./bin/watcher.js');

shared.clearTerminal();

/** Check to make sure we know where pico-8 executable is */
if (!shared.pico_exe_path) {
	console.log(chalk.red(`\nMissing PICO8 environment variable  `));
	console.log(chalk.default(`\nvisit http://www.github.com/nicholaswagner/pico-tools#setup-is-a-piece-of-cake  \n\n`))
	process.exit(0);
}

var command_name = process.argv[2];
var command_options = process.argv[3];


switch (command_name) {

	case "bbs":
		opn('https://www.lexaloffle.com/bbs');
		break;

	case "home":
		opn('https://www.github.com/nicholaswagner/pico-tools');
		break;

	case "build":
		builder.build(`${command_options}`);
		break;

	case "watch":
		watcher.watch(`${command_options}`);
		break;

	case "vscode_tasks":
		tasks.install_vscode_tasks();
		break;

	default:
		help.show();
		break;
}