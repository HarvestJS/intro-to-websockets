# Socket.io with Express

First, install dependencies:

`
npm install
`

## Update app.js for the socket.io server

We'll require in the socketio library, but lets name it "socketio":

```javascript

  var socketio = require('socket.io');
```

Now we'll need to re-arrange the express boilerplate just a bit to have a variable for the epxress server.

Change this

```javascript

  http.createServer(app).listen(app.get('port'), function(){

```

to this:

```javascript

  var server = http.createServer(app);

  server.listen(app.get('port'), function(){

```


Now, just after our "var server..." line and before the "server.listen..." line, let's add in our socket listener:

```javascript

  var io = socketio.listen(server);
```

And finally we can add our app.js connection event handling code from the previous exercise to the bottom of this file



## Modify the view

Edit the head section of the layout.jade file to include the socket.io client as well as our customer client script:

`
    script(src='/socket.io/socket.io.js')
`

`
   script(src='/javascripts/myscript.js')
`


## Create the client code

Edit the public/myscript.js file to connect to the server.  This time we don't need to specify a connection URL because we're connecting to the same host that the page is served from:


```javascript

  var socket = io.connect();
```

Also be sure to add the client code that handled "news" messages to this file from the previous exercise.


## start the server!

`
node app.js
`

## Open dev tools in you browser, and load the page.

Go to [http://localhost:3000](http://localhost:3000)

You should see the first server-sent message in the browser's javascript console

## Send a message to the server from the browser console.

in the console window of chrome dev tools or firebug send a message on the socket.

And just as in the previous execrise, the message you sent to the server should now appear in the output of the node process you started.




