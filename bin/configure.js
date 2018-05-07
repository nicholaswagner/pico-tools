#! /usr/bin/env node

const chalk = require('chalk');
const prompt = require('prompt');
const fs = require('fs');
const path = require('path');
const util = require('util');

if (!fs.existsSync('.env')) {
	process.stdout.write('\033c');
	prompt.message = "";
	prompt.delimiter = "";
	prompt.start();

	console.log(chalk.black.bgWhite(`\n\nPlease enter the location of Pico8.exe / Pico8.app		`));
	console.log(chalk.white.bgBlack(`\n(pro-tip:  you can always just drag and drop the application on this window.)`));
	console.log(chalk.grey.bgBlack(`\nexample: "C:/\Program Files (x86)/\PICO-8/\pico8.exe"\n\n`));

	prompt.start();
	prompt.get([{
			name: 'filepath',
			required: true,
			description: `${chalk.yellow("path:	")}`
		}],
		function (err, result) {
			if (err) return console.log(chalk.red(err));

			let d = `PICO8 = ${result.filepath}`;

			fs.writeFile('.env', d, function (err) {

				process.stdout.write('\033c');
				console.log(chalk.black.bgWhite(`\n\ngulp-pico8 setup complete..	`));
				console.log(chalk.grey(`\nsaved to: ${path.resolve('.env\n')}`));
				console.log(chalk.black.bgWhite(`If you ever need to update this path just run configure again!\n\n`));
			})
		});
}