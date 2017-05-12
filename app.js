//Import Express in this application
var express = require('express');

//create app as express instance
var app = express();


//REST GET method at address "/"

app.get('/', function (req, res) {

  //req is data as input for this GET REST Method


  //res is data is output to send back with this GET REST Method

  res.send('Hello world');

  //res.send is method to send the response as output

});




// Create server at given address "0.0.0.0" and posrt "8080"

var server = app.listen(8080, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)
});


