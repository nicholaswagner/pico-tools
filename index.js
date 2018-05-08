#! /usr/bin/env node

const chalk = require('chalk');
const opn = require('opn');
const shared = require('./bin/shared.js');
const help = require('./bin/help.js');
const tasks = require('./bin/vscode_tasks.js');

//process.stdout.write("\033c"); // clear the terminal

shared.clearTerminal();

/** Check to make sure we know where pico-8 executable is */
if (!shared.pico_exe_path) {
	console.log(
		chalk.white.bgRed(` Missing PICO8 environment variable  `) +
		chalk.white.bgBlack(`\n\n visit http://www.github.com/nicholaswagner/pico-tools#setup-is-a-piece-of-cake  \n\n`)
	);
	process.exit(0);
}

var command_name = process.argv[2];
var command_options = process.argv[3];


console.log(`command was: ${command_name}  with options:  ${command_options}`);

switch (command_name) {

	case "bbs":
		opn('https://www.lexaloffle.com/bbs');
		break;

	case "home":
		opn('https://www.github.com/nicholaswagner/pico-tools');
		break;

	case "build":
	case "watch":
		break;

	case "vscode_tasks":
		tasks.install_vscode_tasks();
		break;

	default:
		help.show();
		break;
}


// const path = require('path');
// const dotenv = require('dotenv').config({
// 	path: path.resolve(process.cwd(), '.pico_tools.env')
// });
// const chalk = require('chalk');

// var cmd = `${process.argv[2]}`;

// //console.log(process.argv);

// if (process.env.PICO8 == undefined) {
// 	require('./bin/configure.js').run();
// } else {
// 	switch (cmd) {

// 		case 'setup':
// 			require('./bin/configure.js').run();
// 			break;

// 		case 'build':
// 			require('./bin/build.js').run(`${process.argv[3]}`);
// 			break;

// 		case 'watch':
// 			require('./bin/watch.js').run(`${process.argv[3]}`);
// 			break;

// 		case 'vscode_tasks':
// 			require('./bin/vscode_tasks.js').run();
// 			break;

// 		default:
// 			console.log(chalk.black.bgWhite("🕹️   pico-tools v1.0.0  "));
// 			process.exit(1);
// 			break;
// 	}
// }