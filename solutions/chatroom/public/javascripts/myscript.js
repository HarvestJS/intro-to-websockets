var socket = io.connect();
socket.on('news', function (data) {
  console.log(data);
});

function addMessage(data){
  console.log(data);
  var msgDiv = document.createElement('div');
  msgDiv.innerHTML = data.name + ': ' + data.msg;
  document.getElementById('output').appendChild(msgDiv);
}

window.onload = function(){


  // handle send button
  document.getElementById('sendBtn').addEventListener('click', function( event ) {

    //
    var data = {
      name: document.getElementById('nameTxt').value,
      msg: document.getElementById('msgTxt').value
    };
    socket.emit('chat',data);
    addMessage(data);

  }, false);

  //handle incoming event
  socket.on('chat', function (data) {
    addMessage(data);
  });

};
