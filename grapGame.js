
var http = require('http');
var fs = require('fs');
var path = require('path');
for (let i = 30000; i <31050; i+=158) {
	http.get(('http://dy.www.yxdown.com/news/indexmore.json?callback=viewMoreCallback&key=zixun&previd='+i+'&lastTime='+new Date().getTime()),function(res){
	var html = '';
	res.on('data',function(data){
		html += data;
	});
	res.on('end',function(){
		fs.writeFile('./GameData'+i+'.txt',html,function(err){
			if(err){
				throw err;
			}else{
				console.log('文件写入成功。');
				//console.log(html)
			}
		});
		setTimeout(function(){
			console.log("暂停了2s",2000);
		},2000);
	});
});
}
