#! /usr/bin/env node

const path = require('path');
const find = require('find-process');
const util = require('util');
const exec = require('child_process').exec;
const chalk = require('chalk');
const prompt = require('prompt');
const fs = require('fs');
const dotenv = require('dotenv').config({
	path: path.resolve(process.cwd(), '.pico_tools.env')
});

module.exports = {
	run: function (filename) {
		console.log('filename: ' + filename);

		// Check for PICO8 location
		if (process.env.PICO8 == undefined) {
			console.log(chalk.white("\nNot yet configured.  Run pico-tools setup.\n"));
			process.exit(1);
		}

		if (!filename || filename == "undefined") {
			//process.stdout.write('\033c');
			console.log(chalk.white("\nNo file specified. Use " + chalk.yellow.bgRed("build path/to/file.p8 instead.")));
			process.exit(1);
		}

		fs.watchFile(`${filename}`, {
			interval: 2000
		}, (e, f) => {
			build(filename);
		});

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
							if (instance.name == "pico8.exe" || instance.name == "pico8.app") {
								process.kill(instance.pid);
							}
						});
					exec(buildRunCartCommand(filepath));
				});
		}
	}
}