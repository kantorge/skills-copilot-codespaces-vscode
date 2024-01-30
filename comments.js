// Create web server

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/process_post', urlencodedParser, function(req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    // console.log("Example app listening at http://%s:%s", host, port);
    console.log("My first Node server!");
});

// Path: server.js
// Create web server

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8081);
