var http=require("http");
var server = http.
createServer(function(request, response){
response.setHeader("Content-Type","text/html");
response.write("<h3>Bonjour</h3>");
response.end();


});
server.listen(3000);
console.log("Serveur HTTP démarré sur le port 3000");

var events= require("events");
console.log(server instanceof events.EventEmitter);