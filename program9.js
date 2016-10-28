var http = require('http')

http.get(process.argv[2], function (res) {
	// for(var index in process.argv)
	// 	{
		var data = ''
		res.setEncoding('utf8')
		res.on('data', function (chunk) {
			data += chunk
		})
		res.on('end', function () {
			console.log(data)})}).on('error', console.error)