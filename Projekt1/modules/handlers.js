var fs = require('fs');
var formidable = require('formidable'); // moduł do obsługi zapytań za pomocą formularza 

exports.upload = function(request, response) {
    console.log('Rozpoczynam obsługę żądania upload.');
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, field, files) {
        fs.renameSync(files.upload.path, "test.png"); // metoda odpowiadająca za zmianę nazwy uploadowanego pliku (files.upload.path) na nazwę "test.png"
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />"); // w odpowiedzi na zapytanie upload 
        response.end();
    });
}

exports.welcome = function(request,response) {
    console.log('Rozpoczynam obsługę żądania welcome');
    fs.readFile('templates/start.html', function(err, html){
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();       
    });
}

exports.error = function(request,response) {
    console.log('Oczekuję...');
    response.write('404');
    response.end();
}

exports.show = function(request, response) {
    fs.readFile("test.png", "binary", function(error, file){
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
}