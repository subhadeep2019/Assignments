const fs = require('fs');
const express = require('express');
const bookStoreManager = require("./bookStoreManager.js");
const Book = require('./book.js');

const app = express();
app.use(express.json());

app.get('/book',(req,res)=>{
    res.send(bookStoreManager.getBooks());
});

app.post('/book',(req,res)=>{
    let book = new Book(req.body);
    let result = bookStoreManager.addBook(book);
    if(result == 1)
       res.send("Book Added Successfully.");
    else
       res.send("Unable to add the book");
});

app.patch('/book/:id',(req,res)=>{
    let book = new Book(req.body);
    let result = bookStoreManager.updateBook(book);
    if(result == 1)
       res.send("Book Updated Successfully.");
    else
       res.send("Unable to update the book");
});

app.delete('/book/:id',(req,res)=>{
    let result = bookStoreManager.deleteBook(req.params.id);
    if(result == 1)
       res.send("Book Deleted Successfully.");
    else
       res.send("Unable to delete the book");
});

app.listen(3000,()=>{
     console.log("Server Started");    
})


