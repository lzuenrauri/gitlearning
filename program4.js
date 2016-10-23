var fs = require('fs');

fs.readFile(process.argv[2], function doneReading(err, data) {
	if(err) { return console.error(err); }
	else {
		var buffer_ob = data.toString().split('\n');
		var number = buffer_ob.length - 1;
		console.log(number);
	}
});
