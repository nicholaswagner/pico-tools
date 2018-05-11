#! /usr/bin/env node

const path = require("path");
const find = require("find-process");
const util = require("util");
const execFile = require("child_process").execFile;
const chalk = require("chalk");

const shared = require("./shared.js");

class Builder {
  constructor() {}

  build(filename) {
    if (!filename || filename == "undefined") {
      console.log(`to use the build command you must provide a filename.`);
      console.log(`example:  pico-tools watch ./example.p8\n\n`);
      process.exit(0);
    }

    find("name", "pico8").then(function(list) {
      if (list.length)
        list.forEach(instance => {
          if (instance.name == "pico8.exe" || instance.name == "pico8") {
            process.kill(instance.pid);
          }
        });
      execFile(`${shared.pico_exe_path}`, ["-run", `${filename}`]);
    });
  }
}

var _instance = new Builder();
module.exports = _instance;
