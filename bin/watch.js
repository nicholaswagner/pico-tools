#! /usr/bin/env node

const gulp = require('gulp');
const dotenv = require('dotenv').config()
const find = require('find-process');
const util = require('util');
const exec = require('child_process').exec;
const chalk = require('chalk');
const prompt = require('prompt');
const filenameKey = "--file";

module.exports = {
	run: function (filename) {

		// Check for PICO8 location
		if (process.env.PICO8 == undefined) {
			console.log(chalk.white("\nNo Pico-8 configuration set.  Please run gulp-pico configure.\n"));
			process.exit(1);
		}

		if (!filename || filename == "undefined") {
			//process.stdout.write('\033c');
			console.log(chalk.white("\nNo file specified. Use " + chalk.yellow.bgRed("build path/to/file.p8 instead.")));
			process.exit(1);
		}

		var watcher = gulp.watch(`${process.cwd()}\\${filename}`);
		watcher.on('change', function (event) {
			console.log(chalk.grey("\n reloading"));
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