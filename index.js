#! /usr/bin/env node

const chalk = require('chalk');
const open = require('open');
const shared = require('./bin/shared.js');
const help = require('./bin/help.js');
const tasks = require('./bin/vscode_tasks.js');
const builder = require('./bin/builder.js');
const watcher = require('./bin/watcher.js');
const man = require('./bin/manual.js');

shared.clearTerminal();
var command_name = process.argv[2];
var command_options = process.argv[3];

// its nice to be able to ru these from anywhere
let safeList = ["", "bbs", "home", "man", "undefined"];

/** Check to make sure we know where pico-8 executable is */
if (safeList.indexOf(command_name) < 0 && !shared.pico_exe_path) {
	console.log(chalk.red(`\nMissing PICO8 environment variable  `));
	console.log(chalk.default(`\nvisit http://www.github.com/nicholaswagner/pico-tools#setup-is-a-piece-of-cake  \n\n`))
	process.exit(0);
}

switch (command_name) {
	case "bbs":
		open('https://www.lexaloffle.com/bbs').then(proc => proc.unref());
		break;

	case "home":
		open('https://www.github.com/nicholaswagner/pico-tools').then(proc => proc.unref());
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

	case "man":
		man.show();
		break;

	default:
		help.show();
		break;
}