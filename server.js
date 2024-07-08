const http = require("http");
const app = require("./app");
const {initializeWebSocket} = require("./utils/websocket")
const PORT = process.env.PORT || 8000;


const server = http.createServer(app);

initializeWebSocket(server);


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
