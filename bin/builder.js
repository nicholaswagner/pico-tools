#! /usr/bin/env node

const path = require('path');
const find = require('find-process');
const util = require('util');
const execFile = require('child_process').execFile;
const chalk = require('chalk');

const shared = require('./shared.js');

class Builder {
	constructor() {}

	async build(filename) {
		if (!filename || filename == "undefined") {
			console.log(chalk.white.bgBlack(`to use the build command you must provide a filename.`));
			console.log(chalk.white.bgBlack(`example:  ${chalk.white.bgBlack("pico-tools watch ./example.p8\n\n")}`));
			process.exit(0);
		}

		find('name', 'pico8')
			.then(function (list) {
				if (list.length)
					list.forEach(instance => {
						if (instance.name == "pico8.exe" || instance.name == "pico8.app")
							process.kill(instance.pid);
					});
				try {
					execFile(`${shared.pico_exe_path}`, ["-run", `${filename}`]);
				} catch (err) {
					// assume its going to throw an error because we deliberately kill the process
				}
			});
	}
}

var _instance = new Builder();
module.exports = _instance;