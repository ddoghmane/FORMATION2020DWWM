const { SSL_OP_PKCS1_CHECK_2 } = require("constants");
var http=require("http");
http.createServer(function(request,response){
response.setHeader("Content-type","text/html");
response.write("<h3>Bonjour</h3>");
response.end();



}).listen(3000)
