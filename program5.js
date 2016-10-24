var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function callback(err, data) {
	if(err) {console.error(err)}
	else {
		var expectEnd = path.extname(data[0])
		for(i = 0; i < data.length; i++) {
			if(path.extname(data[i]) === expectEnd){
				console.log(data[i])	
			}
		}		
	}})	

     // var fs = require('fs')  
     // var path = require('path')  
       
     // var folder = process.argv[2]  
     // var ext = '.' + process.argv[3]  
       
     // fs.readdir(folder, function (err, files) {  
     //   if (err) return console.error(err)  
     //   files.forEach(function (file) {  
     //     if (path.extname(file) === ext) {  
     //       console.log(file)  
     //     }  
     //   })  
     // })