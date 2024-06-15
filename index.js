const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3100;

io.on('connection',(socket)=>{
    console.log("User Connected");
    
   socket.on('disconnect',()=>{
      console.log("User Disconnected");
   });
   socket.on('message',(msg)=>{
      console.log(`message received ${msg}`);
      socket.emit('message',`received message ${msg}`);
   });
});

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`); 
});