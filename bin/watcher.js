#! /usr/bin/env node

const path = require('path');
const find = require('find-process');
const util = require('util');
const fs = require('fs');
const execFile = require('child_process').execFile;
const chalk = require('chalk');

const shared = require('./shared.js');
const builder = require('./builder.js');


class Watcher {

	constructor() {
		this.prev = Date.now();
	}

	watch(filename) {
		if (!filename || filename == undefined || filename == "undefined") {
			console.log(chalk.white.bgBlack(`to use the watch command you must provide a filename.`));
			console.log(chalk.white.bgBlack(`example:  ${chalk.cyan.bgBlack("pico-tools watch ./example.p8")} )`));
			process.exit(0);
		} else {
			fs.watch(`${filename}`, {
				interval: 3000
			}, (e, f) => {
				let now = Date.now();
				// adding a delay.  Was getting duplicate events.
				if (now - this.prev > 2000) {
					console.log(chalk.grey('< rebuild triggered'));
					this.prev = now;
					if (e == 'change')
						builder.build(filename);
				}
			});
			builder.build(filename);
		}
	}

}

var _instance = new Watcher();
module.exports = _instance;