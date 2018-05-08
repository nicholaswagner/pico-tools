#! /usr/bin/env node

const os = require('os');
const dotenv = require('dotenv').config();


class PicoUtils {

	constructor() {
		this.OS_MAC = 'macos';
		this.OS_WINDOWS = 'windowsos';
		this.OS_LINUX = 'linuxos';
	}

	get platform() {
		let p = os.platform();
		switch (p) {
			case 'win32':
				return PicoUtils.OS_WINDOWS;
				break;
			case 'darwin':
				return PicoUtils.OS_MAC;
				break;
			default:
				return PicoUtils.OS_LINUX;
				break;
		}
	}

	get pico_exe_path() {
		return process.env.PICO8 || undefined;
	}



}

var _instance = new PicoUtils();
module.exports = _instance;