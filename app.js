const express = require("express");
const {connectTomongo} = require("./db");
const userRouter = require("./routes/user-routes");
const messageRouter = require("./routes/message-routes");
const app = express();

connectTomongo();
app.use(express.json())

app.use("/api/user", userRouter);
app.use("/api/chat", messageRouter);


module.exports = app;