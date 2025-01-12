/*var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Hello World!' + dt.myDateTime());
    res.end();
}).listen(process.env.PORT || 3000);
*/

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  res.write(req.url);
  res.end();
}).listen(8080);
