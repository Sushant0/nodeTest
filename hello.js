var http = require("http");
var pg = require("pg");

var server = http.createServer(function(request,response){
	response.writeHead(200,{"content-type":"text/html"});
	response.write("hello cool world ");
	response.end();
});

// http.set('port', (process.env.PORT || 5000));
// postgres://fkfzvpdebvbzdh:qICgOMOWPnx9IPifa2@*HOST*:*PORT:/*DATABASE*
var PORT = (process.env.PORT || 5000);
var connectionString = "postgres://fkfzvpdebvbzdh:qICgOMOWPnx9IPifa2-FqZDoBE@ec2-54-243-249-165.compute-1.amazonaws.com:5432/dei9lujiig8mcj";

server.listen(PORT,function(){
	console.log("Server listening on: http://localhost:%s %s", PORT , connectionString);
});
console.log('hello world' + process.env.PORT + connectionString + pg);

var client = new pg.Client(connectionString);
client.connect();
var query1 = client.query('CREATE TABLE IF NOT EXISTS menu_table(day int not null, time int not null, menu text, PRIMARY KEY(day, menu))');
query1.on('end', function() {
   console.log("Menu today table successfully created");
});