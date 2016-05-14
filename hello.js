var http = require("http");

var server = http.createServer(function(request,response){
	response.writeHead(200,{"content-type":"text/html"});
	response.write("hello cool world ");
	response.end();
});

// http.set('port', (process.env.PORT || 5000));
var PORT = (process.env.PORT || 5000);
var connectionString = process.env.DATABASE_URL;

server.listen(PORT,function(){
	console.log("Server listening on: http://localhost:%s %s", PORT , connectionString);
});
console.log('hello world' + process.env.PORT + connectionString);
