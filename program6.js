var mymodule = require('./program5.js')
var callback = {
 
}

mymodule(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		console.error(err);
		}
	else 
		{for(index in data) {
		console.error(data[index]);
		}}
});