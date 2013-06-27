
var fs = require("fs");
var path = require("path");
var url = require("url");


var util=require("util");

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};




function route(pathname,response) {
    util.log("peticio per "+  pathname);
       var uri = "www/" + pathname;

       if (uri.charAt(uri.length - 1) == "/") {
           uri += "index.html";
       }

       if (uri.indexOf("..") != -1) {
           response.writeHead(403);
           response.end();
       }

       var filename = path.join(process.cwd(), uri);

       console.log("\tAttempting to serve: " + filename);

       fs.exists(filename, function(exists) {

           if (!exists) {
               console.log("File not found: " + filename);
               response.writeHead(404);
               response.end("Sorry, the file you requested was not found. Don't let it ruin your day! :)");
               return;
           }

           var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
           response.writeHead(200, {'Content-Type':mimeType});

           var fileStream = fs.createReadStream(filename);
           fileStream.pipe(response);
       });



}
exports.route=route;