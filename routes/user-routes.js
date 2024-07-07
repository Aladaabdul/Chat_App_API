const express = require("express");
const userController = require("../controllers/user-controllers");

const userRouter = express.Router();

userRouter.get("/", userController.getAllUser);
userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);

module.exports = userRouter;