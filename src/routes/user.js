const express = require('express');
const controller = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/', controller.registerUser);

module.exports = userRouter;