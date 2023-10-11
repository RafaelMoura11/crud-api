const express = require("express");
const userRouter = require('./routes/user.js');
const app = express();

app.use(express.json());
app.use('/user', userRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`)
})
