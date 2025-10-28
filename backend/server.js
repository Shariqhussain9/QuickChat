import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const ROOM = 'group'
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});

io.on("connection", (socket) => {
  socket.on('joinRoom', async (userName) => {
    console.log(`${userName} is joined the group`);
    
    await socket.join(ROOM);

    
    socket.to(ROOM).emit('roomNotice', userName);
  })

  socket.on('chatMessage', (msg) => {
    socket.to(ROOM).emit('chatMessage', msg);
  })
  socket.on('typing', (userName) => {
    socket.to(ROOM).emit('typing', userName);
  })
  socket.on('stopTyping', (userName) => {
    socket.to(ROOM).emit('stopTyping', userName);
  })

});

httpServer.listen(4600, ()=> console.log(`server is running`));