const express = require('express');
const controller = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/', controller.registerUser);
userRouter.get('/:id', controller.findUserById)
userRouter.put('/:id', controller.updateUser)

module.exports = userRouter;