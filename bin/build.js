#! /usr/bin/env node

const path = require('path');
const dotenv = require('dotenv').config({
	path: path.resolve(process.cwd(), '.pico_tools.env')
});
const find = require('find-process');
const util = require('util');
const exec = require('child_process').exec;
const chalk = require('chalk');


module.exports = {
	run: async (filename) => {

		if (process.env.PICO8 == undefined) {
			console.log(chalk.white("\nNot yet configured.  Run pico-tools setup.\n"));
			process.exit(1);
		}

		if (!filename || filename == "undefined") {
			console.log(chalk.white("\nNo file specified. Use " + chalk.yellow.bgRed("build path/to/file.p8 instead.")));
			process.exit(1);
		}

		build(filename);

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
							if (instance.name == "pico8.exe" || instance.name == "pico8.app")
								process.kill(instance.pid);
						});
					exec(buildRunCartCommand(filepath));
				});
		}

	}
}