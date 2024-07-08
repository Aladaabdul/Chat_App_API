const socketIo = require("socket.io");
const Message = require("../model/Message")

let io;

function initializeWebSocket(server) {
    io = socketIo(server);

    io.on('connection', (socket) => {
        console.log("A user connected");

        socket.on('disconnect', () => {
            console.log("User disconnected")
        });

        socket.on("chat message", async(msg) => {
            console.log("Message received:", msg);

            const newMessage = new Message({
                sender: msg.sender,
                receiver: msg.receiver,
                content: msg.content
            });
            await msg.save();

            io.emit('chat message', msg);
        })
    })
}

module.exports = {
    initializeWebSocket,
    io
};