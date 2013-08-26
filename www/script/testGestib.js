/*
var http = require("http");
var options = {
    host: 'www.google.com',
    proxy:'10.215.9.52:3128',
    path:'/',
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + new Buffer('u52578:sita02').toString('base64')
    }
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
*/


var request = require('request');
var username = '' ;
var password = '' ;
var rand = Math.floor(Math.random()*100000000).toString();
var options = {
    url: 'https://www3.caib.es/xestib',
    auth: {
    user: username,
    password: password,
    qs:{'random':rand}
  }
}

var time=new Date();
var inici=time.getMilliseconds();
request(options, function (err, res, body) {
    if (err) {
        console.log(err);
        return;
    }
    var timefinal=new Date();
    var fi=timefinal.getMilliseconds();
    console.log("milisegons="+parseInt(fi-inici));
    console.log('headers', res.headers);
    console.log('status code', res.statusCode);
//  console.log(body)
});
