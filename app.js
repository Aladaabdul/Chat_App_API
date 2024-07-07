const express = require("express");
const {connectTomongo} = require("./db");
const userRouter = require("./routes/user-routes");
const app = express();
const PORT = process.env.PORT || 8000

connectTomongo();
app.use(express.json())

app.use("/v1/api/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})