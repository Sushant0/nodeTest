var http = require("http");

var server = http.createServer(function(request,response){
	response.writeHead(200,{"content-type":"text/html"});
	response.write("hello world");
	response.end();
});

server.listen(8000);
console.log('hello world 123');
