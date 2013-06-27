
//var express = require("express");
var server = require("./serverStart");
var router = require("./router");


server.serverStart(router.route);


/*
var app=express();


//establir la variable de entorn NODE_ENV (set NODE_ENV=development node server.js)


app.configure("development", function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

}) ;

app.configure("production", function() {
    app.use(express.errorHandler());

});

app.get('/hello.txt', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(8080);

*/

