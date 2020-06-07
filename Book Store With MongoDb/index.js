const express = require("express");
const authRouter = require("./routers/author.route.js");
const bookRouter = require("./routers/book.route.js");
const userRouter = require("./routers/user.route.js");
const port = 3000;

const app = express();
app.use(express.json());
app.use(bookRouter);
app.use(authRouter);
app.use(userRouter);



app.listen(port,()=>{
    console.log("Server is up on port " + port);
});