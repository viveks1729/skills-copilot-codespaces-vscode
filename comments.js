// Create web server
// Create a web server that listens for requests on port 3000 and serves a static HTML file. The file is called comments.html and is located in the same directory as the comments.js file. The HTML file is provided in the comments.html tab.
// The server should send the comments.html file to the client when the client requests the root URL (http://localhost:3000). The server should also send the comments.html file to the client when the client requests the /comments URL (http://localhost:3000/comments). The server should return a 404 status code and the text 'Not Found' when the client requests any other URL.

// You can use the fs module to read the HTML file and the http module to create the server. The fs module is already imported in the comments.js file.

// The server should listen for requests on port 3000.

// You can start the server by running the following command in the terminal:
// node comments.js

// After starting the server, you can test it by visiting the following URLs in a web browser or using a tool like curl:
// http://localhost:3000
// http://localhost:3000/comments
// http://localhost:3000/invalid
// The first two URLs should return the comments.html file, while the last URL should return a 404 status code and the text 'Not Found'.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/comments') {
    fs.readFile(__dirname + '/comments.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);
console.log('Server is listening on http://localhost:3000');