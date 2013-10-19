var socket = io.connect();
socket.on('news', function (data) {
  console.log(data);
});

//create an addMessage function to display messages here

window.onload = function(){



  document.getElementById('sendBtn').addEventListener('click', function( event ) {

    // add code here to send messages to the server

  }, false);



  //add code here to handle incoming "chat" messages from the server

};
