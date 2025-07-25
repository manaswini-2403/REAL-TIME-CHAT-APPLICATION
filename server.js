const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins for development
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.static('public'));

// Store online users and message history
const users = {};
const messageHistory = [];

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  // Send message history to new client
  socket.emit('message-history', messageHistory);

  // Handle user login
  socket.on('login', (username) => {
    users[socket.id] = username;
    console.log(`User logged in: ${username} (${socket.id})`);
    socket.broadcast.emit('user-connected', username);
    io.emit('update-users', Object.values(users));
  });

  // Handle message sending
  socket.on('send-message', (message) => {
    const msgData = {
      username: users[socket.id],
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    console.log(`Message from ${users[socket.id]}: ${message}`);
    messageHistory.push(msgData); // Store message in history
    io.emit('receive-message', msgData); // Broadcast to all clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    const username = users[socket.id];
    console.log(`User disconnected: ${username} (${socket.id})`);
    delete users[socket.id];
    socket.broadcast.emit('user-disconnected', username);
    io.emit('update-users', Object.values(users));
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});