const express = require('express');
const controller = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/', controller.registerUser);
userRouter.get('/:id', controller.findUserById);
userRouter.get('/', controller.findUsers);
userRouter.put('/:id', controller.updateUser);
userRouter.delete('/:id', controller.deleteUser);

module.exports = userRouter;