// Create web server
// Create a web server that can respond to requests for /comments.json
// with a JSON-encoded representation of the list of comments.
// Use the comments variable from the previous exercise as the data source for the JSON.

var http = require('http');
var comments = require('./comments');

var server = http.createServer(function(req, res) {
  if (req.url === '/comments.json') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8080);