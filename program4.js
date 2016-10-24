var fs = require('fs');

// var newfile = undefined;

// function addString() {
// 	fs.readFile('process.argv[2]', function callback (err, data) {
// 	newfile = data.toString();
// 	})
// };

// addString();
// var file = newfile.split('\n');

console.log(file.length -1);

fs.readFile(process.argv[2], function doneReading(err, data) {
	if(err) { return console.error(err); }
	else {
		var buffer_ob = data.toString().split('\n');
		var number = buffer_ob.length - 1;
		console.log(number);
	}
});
