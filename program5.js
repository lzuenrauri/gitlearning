

module.exports = function(dirList, expectEnd, callback) {
var fs = require('fs')
var path = require('path')
var end = '.' + expectEnd
var foundArr = [];

     fs.readdir(dirList, function(err, data) {
     	if(err) 
               {return callback(err)}
     	else { 
     		for(i = 0; i < data.length; i++) {
     			if(path.extname(data[i]) === end){
     				console.log(data[i])
                         foundArr.push(data[i])
     			}
     		}
               return callback(null,foundArr)		
	     }
     })
}

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