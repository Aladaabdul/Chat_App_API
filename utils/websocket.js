const socketIo = require('socket.io');
const Message = require('../model/Message');
const jwt = require("jsonwebtoken");
require("dotenv").config
const secretKey = process.env.secretKey;

let io;

function initializeWebSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.use((socket, next) => {
        const token = socket.handshake.headers.access_token
        if (!token) {
            return next(new Error('error'));
        }

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return next(new Error('Authentication error'));
            }
            socket.userId = decoded.userId;
            next()
        });
    })

    io.on('connection', (socket) => {
        console.log("A user connected");

         socket.on('message', (message) => {
            let parsedMessage;
            try {
                parsedMessage = JSON.parse(message);
            } catch (error) {
                console.error('Error parsing message:', error);
                return;
            }
            if (parsedMessage.event === 'join') {
                const userId = parsedMessage.data;
                console.log(`User ${userId} joined room ${userId}`);
                socket.join(userId);
            } else if (parsedMessage.event === 'chat message') {
                const msg = parsedMessage.data;
                console.log("Message received:", msg);

                const newMessage = new Message({
                    sender: msg.sender,
                    receiver: msg.receiver,
                    content: msg.content
                });
                newMessage.save().then(() => {
                    // Emit the message to the recipient's room
                    io.to(msg.receiver).emit('chat message', msg);
                }).catch((err) => console.error(err));
            }
        });


        socket.on('disconnect', () => {
            console.log("User disconnected");
        });
    });
}

module.exports = {
    initializeWebSocket,
    io
};
