var fs = require('fs');
var http = require('http');

var folderDir = '.';
var server = http.createServer();

fs.readFile('./index.html', 'utf-8', function(err, data){
    server.on('request', function (request, response) {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        if (request.method === 'GET' && request.url == '/'){
            response.write(data);
            response.end(); 
        } else {
            response.statusCode = 404;
            fs.readFile('tc-404.jpg', function (err, data) {
                response.writeHead(200, {'Content-Type': 'image/jpeg'});
                if (err) throw err;
                response.write(data);
                response.end();
            });
        }
    });
})

server.listen(9000);
console.log('server running at localhost:9000');
