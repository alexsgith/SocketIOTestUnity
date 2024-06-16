var port = process.env.PORT || 3000,
    io = require('socket.io')(port),
    gameSocket = null;
io.on('connection',function(socket){
    console.log("User Connected");
   socket.on('message',function(msg){
      console.log(msg.test2);
      socket.emit('message',{test:`received message `});
   });
    socket.on("disconnect", function (data) {
        console.log("User Disconnected");
    });
    
});
