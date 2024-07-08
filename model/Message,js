const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const MessageModelSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    content: {
        type: String,
        required: true
    },

    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Message", MessageModelSchema);