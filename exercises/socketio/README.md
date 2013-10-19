# Basic Socket.io

First, install socket.io dependency:

`
npm install socket.io
`

## Update app.js for the socket.io server

We'll need to include the module, and have it listen on a port:

```javascript

  var io = require('socket.io').listen(8080);
```

Thenw we need to register a callback function to handle client connection events:

```javascript

  io.sockets.on('connection', function (socket) {
    ...
  }
```

Inside of that function we can immediately send a message to the client that connected:

```javascript

  socket.emit('news', { hello: 'world' });
```

Also inside of the connection event, we can listen for any custom events sent up from the client and do something with the data the client sends:

```javascript

  socket.on('someEvent', function (data) {
    console.log(data);
  });
```

## Update index.html for the client page

modify the script tag to make a connection to the socket server:

```javascript

  var socket = io.connect('http://localhost:8080');
```

after the connection of the socket, register a handler to log "news" messages pushed from the server:

```javascript

  socket.on('news', function (data) {
    console.log(data);
  });
```

## start the server!

`
node app.js
`

## Open dev tools in you browser, and load the index.html page from your filesystem

Double-clicking on the file to luanch the browser should work.

You should see the first server-sent message in the browser's javascript console.

## Send a message to the server from the browser console.

in the console window of chrome dev tools or firebug send a message on the socket:

```javascript

  socket.emit('someEvent', { hello: 'from the client' });
```

The message you sent to the server should now appear in the output of the node process you started.

You may also wish to view the client-server traffic in chrome dev tools in the networking tab. Specifically the "frames" sub tab after selecting the websocket connection.


