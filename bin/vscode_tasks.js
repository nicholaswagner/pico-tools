#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

module.exports = {
	run: function () {
		if (!fs.existsSync('.vscode'))
			fs.mkdirSync('.vscode');

		fs.createReadStream('bin/vscode/tasks.json').pipe(fs.createWriteStream('.vscode/tasks.json'));
	}
}