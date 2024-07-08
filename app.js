const express = require("express");
const {connectTomongo} = require("./db");
const userRouter = require("./routes/user-routes");
const messageRouter = require("./routes/message-routes");
const app = express();
const PORT = process.env.PORT || 8000

connectTomongo();
app.use(express.json())

app.use("/api/user", userRouter);
app.use("/api/chat", messageRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})