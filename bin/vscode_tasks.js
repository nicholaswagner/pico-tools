#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const shared = require("./shared.js");

class Tasks {
  constructor() {}

  get taskJson() {
    return {
      version: "2.0.0",
      tasks: [
        {
          label: "run with pico-tools",
          type: "shell",
          command: "pico-tools build ${file}",
          isBackground: false,
          group: {
            kind: "build",
            isDefault: true
          }
        },
        {
          label: "watch with pico-tools",
          type: "shell",
          command: "pico-tools watch ${file}",
          isBackground: true,
          group: {
            kind: "build",
            isDefault: true
          }
        }
      ]
    };
  }

  async install_vscode_tasks() {
    if (!fs.existsSync(".vscode")) fs.mkdirSync(".vscode");

    fs.writeFileSync(
      "./.vscode/tasks.json",
      JSON.stringify(this.taskJson),
      err => {
        shared.clearTerminal();
        console.log(
          chalk.white.bgRed(` Error- Unable to create vscode tasks.json.\n`)
        );
        console.log(
          chalk.default(
            "Please submit an issue at: " +
              `http://www.github.com/nicholaswagner/pico-tools#issues \n`
          )
        );
        console.log(`\nError Details ---- \n`);
        console.log(err);
        console.log(`\n`);
      }
    );
    shared.clearTerminal();
    console.log(
      chalk.default(
        "\n./vscode/tasks.json installed.  pico-tools build and watch commands now available to vscode.\n"
      )
    );
    process.exit(0);
  }
}

var _instance = new Tasks();
module.exports = _instance;
