var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Hello World!' + dt.myDateTime() + '${req.url}');
    res.end();
}).listen(process.env.PORT || 3000);
