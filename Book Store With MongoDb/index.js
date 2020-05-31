const express = require("express");
const authRouter = require("./routers/author.route.js");
const bookRouter = require("./routers/book.route.js");
const port = 3000;

const app = express();
app.use(express.json());
app.use(bookRouter);
app.use(authRouter);



app.listen(port,()=>{
    console.log("Server is up on port" + port);
});