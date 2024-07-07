const mongoose = require("mongoose");


const Schema = mongoose.Schema;

UserModelSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true 
    }
})

module.exports = mongoose.model("User", UserModelSchema);