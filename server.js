const http = require("http");
const app = require("./app");
const { initializeWebSocket } = require("./utils/websocket")


const server = http.createServer(app);

initializeWebSocket(server);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
