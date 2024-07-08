const express = require("express");
const userController = require("../controllers/user-controllers");

const userRouter = express.Router();

// User routes
userRouter.get("/", userController.getAllUser);
userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);

module.exports = userRouter;