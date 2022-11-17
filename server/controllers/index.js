exports.messages = require('./messages.js');
exports.users = require('./users.js');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};

var messages = [];

var requestHandler = function(request, response) {

  var url = request.url;
  var method = request.method;
  var messagesPath = '/classes/messages';


  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  var statusCode;

  // See the note below about CORS headers.
  var headers = defaultCorsHeaders;

  headers['Content-Type'] = 'application/json';

  var acceptableMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
  if (acceptableMethods.indexOf(method) === -1) {
    statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end([{error: 'action not found'}]);
  }


  if (request.method === 'GET') {
    if (url === messagesPath) {
      statusCode = 200;
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(messages));
    } else {
      statusCode = 404;
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify([{error: 'messages not found'}]));
    }
  }


  if (request.method === 'POST') {
    if (url === messagesPath) {
      statusCode = 201;
      response.writeHead(statusCode, headers);

      var body = '';

      request.on('error', (err) => {
        console.error(err);
      }).on('data', (chunk) => {
        body += chunk;
      }).on('end', () => {
        messages.push(JSON.parse(body));

        response.end(JSON.stringify(messages));

      });
    } else {
      statusCode = 404;
      response.writeHead(statusCode, headers);
      response.end([{error: 'path not found'}]);
    }
  }

  if (request.method === 'DELETE') {
    if (url === messagesPath) {
      var body = '';
      request.on('error', (err) => {
        console.error(err);
      }).on('data', (chunk) => {
        body += chunk;
      }).on('end', () => {
        messages = [];
      });
    } else {
      statusCode = 204;
      response.writeHead(statusCode, headers);
      response.end([{error: 'path not found'}]);
    }
  }

  if (request.method === 'OPTIONS') {
    if (url === messagesPath) {
      statusCode = 200;
      response.writeHead(statusCode, headers);
      response.end();
    } else {
      statusCode = 404;
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify([{error: 'options not found'}]));
    }
  }


};

module.exports.requestHandler = requestHandler;