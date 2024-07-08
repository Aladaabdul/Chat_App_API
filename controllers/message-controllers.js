const Message = require("../model/Message");

async function sendMessage(req, res) {
    const { sender, receiver, content } = req.body;

    const message = new Message({
        sender,
        receiver,
        content
    })

    try {
        await message.save()
    } catch(error) {
        res.status(500).json({error: "Message failed to send"});
    }

    return res.status(201).json({message: "Message sent successfully", message});
}

async function getMessage(req, res) {
    const {userId} = req.params;

    try {
        const message = await Message.find({
            $or: [{sender: userId}, {recipient: userId}]
        }).sort({timestamp: -1})
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch messages"});
    }
}

async function getMessageBetweenUsers(req, res) {
    const {senderId, receiverId} = req.params;

    try{
        const message = await Message.find({
            $or: [
                {sender: senderId, receiver: receiverId},
                {sender: receiverId, receiver: senderId}
            ]
        }).sort({timestamp: -1})
        res.status(200).json(message);
    } catch(error) {
        res.status(500).json({error: "Failed to fetch message"})
    }
}

module.exports = {
    sendMessage,
    getMessage,
    getMessageBetweenUsers
}

