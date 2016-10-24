var fs = require('fs');
var newfile = undefined;

function addString() {
	fs.readFile('process.argv[2]', function callback (err, data) {
	newfile = data.toString();
	})
};

addString();
var file = newfile.split('\n');

console.log(file.length -1);