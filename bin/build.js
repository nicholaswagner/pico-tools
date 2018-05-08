#! /usr/bin/env node

const path = require('path');
const dotenv = require('dotenv').config({
	path: path.resolve(process.cwd(), '.pico_tools.env')
});
const find = require('find-process');
const util = require('util');
//const exec = require('child_process').exec;

const chalk = require('chalk');
const execFile = require('child_process').execFile;

module.exports = {
	run: async (filename) => {
		console.log('\n\nbuild run called\n');

		if (process.env.PICO8 == undefined) {
			console.log(chalk.white("\nNot yet configured.  Run pico-tools setup.\n"));
			process.exit(1);
		}

		if (!filename || filename == "undefined") {
			console.log(chalk.white("\nNo file specified. Use " + chalk.yellow.bgRed("build path/to/file.p8 instead.")));
			process.exit(1);
		}

		build(filename);

		// function buildRunCartCommand(filepath) {
		// 	if (process.platform == 'darwin'){
		// 		return `${process.env.PICO8} -r ${filepath}`;
		// 	}
		// 	else {
		// 		return `"${process.env.PICO8}" "-run" "${filepath}"`;
		// 	}
		// }

		function build(filepath) {
			find('name', 'pico8')
				.then(function (list) {
					if (list.length)
						list.forEach(instance => {
							if (instance.name == "pico8.exe" || instance.name == "pico8.app")
								process.kill(instance.pid);
						});
					execFile(`${process.env.PICO8}`,["-run", `${filepath}`], (err,stdout,stderr) => {
						if (err) throw err;
						console.log(stdout);
					});
				});
			//console.log('\n--	'+filepath);
			//exec(buildRunCartCommand(filepath));
			//execFile(`"${process.env.PICO8}"`,[`-run ${filepath}`], (err,stdout,stderr) => {

			
		}

	}
}