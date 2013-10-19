# Simple chatroom with Express and Socket.io

First, install dependencies:

`
npm install
`

# build chatroom

use

broadcast:

```javascript

  socket.broadcast.emit('chat',{msg: 'bar', from: 'foo'});
```

and join room:

```javascript

  socket.join('room');
```

and broadcast to room:


```javascript

  socket.broadcast.to('room').emit('event_name', data)
```

