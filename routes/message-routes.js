const express = require("express");
const messageController = require("../controllers/message-controllers");

const messageRouter = express.Router();

messageRouter.post("/send", messageController.sendMessage);
messageRouter.get("/messages/:userId", messageController.getMessage);
messageRouter.get("/messages/:senderId/:receiverId", messageController.getMessageBetweenUsers);



module.exports = messageRouter;