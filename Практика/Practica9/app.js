const http = require("http");

var server = http.createServer(
    function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        if(request.url=="/boy"){
        response.write('Hello');
        }
        if(request.url=="/s"){
        response.write('Hello World!<br>Hallo');
        }
        response.end();
    });
server.listen(3000)