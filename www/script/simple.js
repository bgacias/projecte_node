// 13-2
var request = require('request');
var inspect = require('util').inspect;



var rand = Math.floor(Math.random()*100000000).toString();
var uri='http://localhost:3030/abc/def';
var params='?param='+rand;
var options={
    uri: uri+params,
    method: 'GET',
    body: new Buffer('hola')
};


request( options,
  function(err, res, body) {
    if (err) { throw err; }
    console.log(inspect({
      err: err,
      res: {
        statusCode: res.statusCode
      },
      body: JSON.parse(body)
    }))

  }
);

