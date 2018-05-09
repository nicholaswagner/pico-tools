#! /usr/bin/env node

const os = require('os');
const dotenv = require('dotenv').config();


class Shared {

	constructor() {
		this.OS_MAC = 'macos';
		this.OS_WINDOWS = 'windowsos';
		this.OS_LINUX = 'linuxos';
	}

	get platform() {
		let p = os.platform();
		switch (p) {
			case 'win32':
				return this.OS_WINDOWS;
				break;
			case 'darwin':
				return this.OS_MAC;
				break;
			default:
				return this.OS_LINUX;
				break;
		}
	}

	get pico_exe_path() {
		return process.env.PICO8 || undefined;
	}

	clearTerminal() {
		process.stdout.write(`\x1B[2J\x1B[0f`);
	}



}

var _instance = new Shared();
module.exports = _instance;