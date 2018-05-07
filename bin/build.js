#! /usr/bin/env node

const dotenv = require('dotenv').config()
const find = require('find-process');
const util = require('util');
const exec = require('child_process').exec;
const chalk = require('chalk');

if (process.env.PICO8 == undefined) {
	console.log(chalk.white("\nNo Pico-8 configuration set.  Please run gulp-pico configure.\n"));
	process.exit(1);
}

if (!process.argv[2]) {
	console.log(chalk.white("\nNo file specified. Use " + chalk.yellow.bgRed("build path/to/file.p8 instead.")));
	process.exit(1);
}

build(process.argv[2]);

function buildRunCartCommand(filepath) {
	let fp = `"${process.env.PICO8}"`;
	let flags = ` "-run"`;
	let result = fp + flags + ` "${filepath}"`;
	return result;
}

function build(filepath) {
	find('name', 'pico8')
		.then(function (list) {
			if (list.length)
				list.forEach(instance => {
					process.kill(instance.pid);
				});
		});
	exec(buildRunCartCommand(filepath));
}