const userModel = require("../model/User");
const bycrpt = require("bcrypt");


async function getAllUser(req, res) {
    let user;

    try {
        user = await userModel.find()
    } catch(error) {
        console.log(error);
    }

    if (!user) {
        return res.status(404).json({message: "No user found"});
    }
    return res.status(200).json({user});
}


async function registerUser(req, res) {
    const { username, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await userModel.findOne({email});
    } catch(error) {
        console.log(error);
    }

    if (existingUser) {
        return res.status(400).json({messsage: "User already exist! Login instead"});
    }

    const hashedpassword = bycrpt.hashSync(password, 10)

    const user = new userModel({
        username,
        email,
        password: hashedpassword
    })

    try {
        await user.save()
    } catch (error) {
        return console.log(error);
    }

    return res.status(201).json({messsage:"User register Successfully", user});
}

async function loginUser(req, res) {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await userModel.findOne({email});
    } catch (error) {
        console.log(error);
    }

    if (!existingUser) {
        return res.status(404).json({message: "No user found! Signup instead"});
    }

    const isPasswordCorrect = bycrpt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({message: "Incorrect password"});
    }

    return res.status(200).json({message: "Login successfully", existingUser});
}

module.exports = {
    getAllUser,
    registerUser,
    loginUser
}