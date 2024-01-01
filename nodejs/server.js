

const hostname = '127.0.0.1';

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end("this is another server");
}).listen(8080);

console.log("server running at http://127.0.0.1:8080 ")
