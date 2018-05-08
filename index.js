#! /usr/bin/env node

const dotenv = require('dotenv').config()

switch (`${process.argv[2]}`) {
	case 'configure':
		require('./bin/configure.js').run();
		break;

	case 'build':
		require('./bin/build.js').run(`${process.argv[3]}`);
		break;

	case 'watch':
		require('./bin/watch.js').run(`${process.argv[3]}`);
		break;

	case 'vscode_tasks':
		require('./bin/vscode_tasks.js').run();
		break;

	case 'undefined':
	default:
		console.log(`error:  ${process.argv[2]} `);
		process.exit(1);
		break;


}