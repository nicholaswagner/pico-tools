#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

module.exports = {
	run: function () {
		if (!fs.existsSync('.vscode'))
			fs.mkdirSync('.vscode');

		let tasks = {
			"version": "2.0.0",
			"tasks": [{
					"label": "Run the current file in Pico-8",
					"type": "shell",
					"command": "pico-tools build ${file}",
					"isBackground": false,
					"group": {
						"kind": "build",
						"isDefault": true
					},
				},
				{
					"label": "Watch current file and reload Pico-8 on save",
					"type": "shell",
					"command": "pico-tools watch ${file}",
					"isBackground": true,
					"group": {
						"kind": "build",
						"isDefault": true
					}
				}
			]
		};

		fs.writeFileSync("./.vscode/tasks.json", JSON.stringify(tasks), (err) => {
			Console.log("error writing vscode tasks.  please ping me and let me know that this broke for you, in the meantime, there is a copy on my github repo.");
		});
	}
}