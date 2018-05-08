#! /usr/bin/env node

const chalk = require('chalk');
const shared = require('./shared.js');

class Help {
	constructor() {}

	show() {
		shared.clearTerminal();
		console.log(chalk.white.bgBlack(`\n\nUsage:  pico-tools COMMAND [command-specific-options] \n`));
		console.log(`${chalk.white.bgBlack("build [file]		#  run pico-8, load file, auto-play")}`);
		console.log(`${chalk.white.bgBlack("watch [file]		#  reload pico-8 when file is changed")}`);
		console.log(`${chalk.white.bgBlack("vscode_tasks  		#  install a .vscode/tasks.json configured to use pico-tools to the current directory")}`);
		console.log(`${chalk.white.bgBlack("bbs  			#  Open the pico-8 bbs")}`);
		console.log(`${chalk.white.bgBlack("home  			#  Open the pico-tools github page")}`);
		console.log(`${chalk.white.bgBlack("\n")}`);
		process.exit(0);
	}

}

var _instance = new Help();
module.exports = _instance;