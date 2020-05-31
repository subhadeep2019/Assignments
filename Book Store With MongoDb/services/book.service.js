var bookModel = require('../models/book.model.js');

exports.getBooks = async () =>{
    bookModel.find({},(error,books)=>{
         if(error)
              throw error;
         else
              return books;               
    })
}

exports.createBook = async (name, isbn)=>{
     const book = new bookModel({
        Name: name,
        ISBN: isbn       
     })

     try
     {
         await book.save();                
         return book;
     }
     catch(error)
     {
        throw error;
     }
}

exports.updateBook = async (bookId,name, isbn)=>{
     try
     {
         let book = await bookModel.findByIdAndUpdate(bookId, {Name: name, ISBN: isbn}, {new: true, runValidators: true})
         return book;
     }
     catch(err)
     {
         throw err;
     }
}

exports.deleteBook = async (bookId)=>{
    try
    {
        let book = await bookModel.findByIdAndDelete(bookId)
        return book;
    }
    catch(err)
    {
        throw err;
    }
}