#! /usr/bin/env node

const fs = require("fs");
const chalk = require("chalk");
const shared = require("./shared.js");
const exec = require("child_process").exec;
const child = require("child_process").execFileSync;

class Man {
  constructor() {}

  show() {
    let path = module.filename;
    let dir = path.slice(0, path.lastIndexOf(`\\`));
    let manpage = fs.readFileSync(`${dir}\\pico_manual.txt`);

    shared.clearTerminal();
    let app = shared.platform == shared.OS_WINDOWS ? "more" : "less";
    console.log(manpage.toString());
    process.exit(0);
  }
}

var _instance = new Man();

module.exports = _instance;
