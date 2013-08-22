var httpd = require('http').createServer(handler);
var io = require('socket.io').listen(httpd);
var fs = require('fs');
var util = require('util');

httpd.listen(3030);

function handler(req, res) {
    console.log(util.inspect(req.headers));
    fs.readFile("www/html/socket.html",
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading socket.html');
                }
                console.log("trobat fitxer www/html/socket.html");
                res.writeHead(200, {'Content-Type':"text/html"});
                res.end(data);
            }
    );

};


io.sockets.on('connection', function (socket) {
    socket.on('my event', function(content) {
        console.log(content);
    });
});