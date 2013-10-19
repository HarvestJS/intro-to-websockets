# Simple chatroom with Express and Socket.io

First, install dependencies:

`
npm install
`

## Update the server app.js file

add another handler in the same manner as the "someEvent" handler from the previous exercise.
This time the event we will handle will be for "chat" message.

Inside of the new handler add code to rebroadcast the message to the other clients as long as there's a name on the incoming message:

```javascript

  if(data.name){
      socket.broadcast.emit('chat',data);
  }
```

## Update the myscript.js file for the client

Add a function to display a message in the user interface:

```javascript

  function addMessage(data){
    console.log(data);
    var msgDiv = document.createElement('div');
    msgDiv.innerHTML = data.name + ': ' + data.msg;
    document.getElementById('output').appendChild(msgDiv);
  }
```

To send messages when the button is clicked, add an emit inside the button click handler,
and also update the user interface with the addMessage function:

```javascript

    var data = {
      name: document.getElementById('nameTxt').value,
      msg: document.getElementById('msgTxt').value
    };
    socket.emit('chat',data);
    addMessage(data);
```


To handle incoming messages from the server, create an event handler similar to the "someEvent" handler from the previous exercises, but this time for the "chat" event.
In this handler simply call the addMessage function

```javascript

    addMessage(data);
```

## start the server!

`
node app.js
`

Go to [http://localhost:3000](http://localhost:3000) in two different browsers (or browser windows) and test out the chat room.

# Optional - Using named chatrooms


To use have a socket join a room, somewhere in your server (app.js) code, call the socket.join function:

```javascript

  socket.join('someRoom');
```

and broadcast only to clients that have joined that room:


```javascript

  socket.broadcast.to('room').emit('chat', data)
```

