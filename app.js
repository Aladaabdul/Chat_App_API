const express = require("express");
const {connectTomongo} = require("./db");
const app = express();
const PORT = process.env.PORT || 8000

connectTomongo();
app.use(express.json())



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})