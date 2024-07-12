const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors()); // Add cors middeleware

const server = http.createServer(app);

//Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
    cors: {
        origin: 'http://127.0.0.1:3000',
        methods: ['GET', 'POST'],
    },
});

const CHAT_BOT = 'ChatBot';
let chatRoom = '';  //Chatroom like javascript, node, express, react
let allUsers = []; //All users in the chatroom

//Listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);


socket.on('join_room', (data) => {
    const { username, room } = data; //Data sent from client when join_room even is emitted
    soket.join(room); //Join the room

    let __createdtime__ = Date.now(); // current time
    
    //Send a welcome message to the user that joined the room
    socket.to(room).emmit('receive_message', {
        message: `${username} has joined the room`,
        username: CHAT_BOT,
        __createdtime__,
        });
    
    socket.emit('receive_message', {
        message: `Welcome ${username}`,
        username: CHAT_BOT,
        __createdtime__,
        });

        chatRoom = room; //Set the chatroom to the room the user joined
        allUsers.push({ id: socket.id, username, room }); //Add the user to the list of all users
        chatRoomUsers = allUsers.filter((user) => user.room === room); //Get all users in the chatroom
        socket.to(room).emit('chatroom_users', chatRoomUsers) //Send the list of all users in the chatroom to all users in the chatroom
    });
 });



app.get('/', (req, res) => {
    res.send('Hello World');
});

server.listen(4000, () => 'Server is running on port 3000');
