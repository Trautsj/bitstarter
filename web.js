var express = require('express');

var app = express.createServer(express.logger());

/* var MsgBuf = fs.readFileSync('index.html');
var Msg = MsgBuf.toString('utf-8',1,28); */

app.get('/', function(request, response) {
    var fs = require('fs');
    var content = fs.readFileSync('index.html', 'utf-8');
    /* response.send(Msg); */
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
