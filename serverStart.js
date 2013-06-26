var http = require("http");
var url = require("url");
function serverStart(route) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Received petition for " + pathname);
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("¿test---?");
        response.end();
    }).listen(8080);
    console.log("Server started...");
}
exports.start = serverStart;