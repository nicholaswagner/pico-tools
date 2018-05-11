#! /usr/bin/env node

const chalk = require("chalk");
const shared = require("./shared.js");

class Help {
  constructor() {}

  show() {
    shared.clearTerminal();
    console.log(
      chalk.default(
        `\n\nUsage:  pico-tools COMMAND [command-specific-options] \n`
      )
    );
    console.log(
      `${chalk.default("build [file]		#  run pico-8, load file, auto-play")}`
    );
    console.log(
      `${chalk.default("watch [file]		#  reload pico-8 when file is changed")}`
    );
    console.log(
      `${chalk.default(
        "vscode_tasks  		#  install a .vscode/tasks.json configured to use pico-tools to the current directory"
      )}`
    );
    console.log(`${chalk.default("bbs  			#  Open the pico-8 bbs")}`);
    console.log(`${chalk.default("home  			#  Open the pico-tools github page")}`);
    console.log(`${chalk.default("\n")}`);
    process.exit(0);
  }
}

var _instance = new Help();
module.exports = _instance;
