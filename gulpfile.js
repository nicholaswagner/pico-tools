const gulp = require('gulp');
const dotenv = require('dotenv').config()
const find = require('find-process');
const util = require('util');
const exec = require('child_process').exec;

var child = undefined;
var filenameKey = "--file";

function buildRunCartCommand(cart) {
	let fp = `"${process.env.PICO8}"`;
	let flags = ` "-run"`;
	let result = fp + flags + ` "${process.cwd()}\\${process.env.CARTS || './carts'}\\${cart}"`;
	return result;
}

function buildCart(filename) {
	child = exec(buildRunCartCommand(filename));
}

function reload(filename) {
	find('name', 'pico8')
		.then(function (list) {
			if (list.length)
				list.forEach(instance => {
					process.kill(instance.pid);
				});
			child = exec(buildRunCartCommand(filename));
		});
}

function getCartName(argv) {
	let result = "example.p8";
	if (argv.indexOf(filenameKey) > -1) result = `${argv[argv.indexOf(filenameKey)+1]}`;
	return result != "undefined" ? result : "example.p8";
}

/*	build once	*/
gulp.task('build', function () {
	buildCart(getCartName(process.argv));
});

gulp.task('test', function () {
	console.log(`${process.env.CARTS || './carts/'}`);
})


gulp.task('reload', function () {
	var watcher = gulp.watch(`./carts/${getCartName(process.argv)}`);
	watcher.on('change', function (event) {
		reload(getCartName(process.argv));
		// find('name', 'pico8')
		// 	.then(function (list) {
		// 		if (list.length)
		// 			list.forEach(instance => {
		// 				process.kill(instance.pid);
		// 			});
		// 		buildCart(getCartName(process.argv));
		// 	});
	});
	buildCart(getCartName(process.argv));
})