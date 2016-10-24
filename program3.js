var fs = require('fs');

var buffer_ob = fs.readFileSync(process.argv[2]).toString();

console.log(buffer_ob.split('\n').length - 1);
