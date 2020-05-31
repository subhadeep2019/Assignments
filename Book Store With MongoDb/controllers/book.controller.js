var bookService = require('../services/book.service.js')

exports.getBooks = async (req,res)=>{
    try
    {
        let books = await bookService.getBooks();
        res.status(200).send(books);
    }
    catch(err)
    {
         res.status(400).send(err);
    }
}

exports.createBook = async (req,res)=>{
    try
    {
         let book = await bookService.createBook(req.body.Name,req.body.ISBN);
         res.status(200).send(book);
    }
    catch(err)
    {
         res.status(400).send(err);
    }
}

exports.updateBook = async (req,res)=>{
    try
    {
         let book = await bookService.updateBook(req.params.id,req.body.Name,req.body.ISBN);
         if(!book)
         {
              res.status(400).send("Book Id doesn't exist");
         }
         res.status(200).send(book);
    }
    catch(err)
    {
         res.status(400).send(err);
    }
}

exports.deleteBook = async (req,res)=>{
    try
    {
         let book = await bookService.deleteBook(req.params.id);
         if(!book)
         {
              res.status(400).send("Book Id doesn't exist");
         }
         res.status(200).send(book);
    }
    catch(err)
    {
         res.status(400).send(err);
    }
}