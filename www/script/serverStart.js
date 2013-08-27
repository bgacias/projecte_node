var http = require("http");
var url = require("url");
var util =require("util");

function serverStart(route) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(pathname,response);
       /* response.writeHead(200, {"Content-Type": "text/html"});
        response.write("test---?");
        response.end();*/
    }).listen(3030);
    util.log("Server started...on port 3030");
}
exports.serverStart = serverStart;