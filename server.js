// import express
const express = require('express');

//make an app for express
const app = express();

const server = require('http').Server(app);

// it will pick index.html
app.use(express.static('public'));

const io = require('socket.io')(server);

// server will be having io
io.on('connection', (socket) => { // Corrected the event name to 'connection'
    console.log('Connection established', socket.id);

    socket.on('message', (data) => { // user is sending the data
        io.emit('message', data); // emitting this message to all other sockets
    });

    socket.on('disconnect', () => {
        console.log(socket.id, 'left the chat');
    });
});

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
});
