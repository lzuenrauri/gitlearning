var fs = require('fs');

var buffer_ob = fs.readFileSync(process.argv[2]).toString();
var newfile = buffer_ob.split('\n');

console.log(newfile.length -1);

