var fs = require('fs');

var data = fs.readFileSync(`${__dirname}/bookstore.json`, "utf-8");
bookStoreData = JSON.parse(data);

writeFile = function(book){
    return new Promise((resolve,reject)=>{
        fs.writeFile(`${__dirname}/bookstore.json`, JSON.stringify(book), "utf-8",(err)=>{
            if(err)
            {
                reject(0);
            }
            resolve(1);
      })
    });    
}

exports.getBooks = function (){
    return bookStoreData;
}

exports.addBook = function(book){
   bookStoreData.push(book);
   writeFile(bookStoreData).then((response)=>{
       return 1;
   }).catch((e) => {
       return 0;
   });
}

exports.updateBook = function(updatedBook){
    let existingBook = bookStoreData.find(book => book.Id == updatedBook.Id);
    existingBook.Id = updatedBook.Id;
    existingBook.Name = updatedBook.Name;
    existingBook.ISBN = updatedBook.ISBN;
    existingBook.Author = updatedBook.Author;
    writeFile(bookStoreData).then((response)=>{
        return 1;
    }).catch((e) => {
        return 0;
    });
 }
 
 exports.deleteBook = function(id){
    let existingBook = bookStoreData.find(book => book.Id == id);
    let indexOfBookToBeDeleted = bookStoreData.indexOf(existingBook)
    if(indexOfBookToBeDeleted > -1)
         bookStoreData.splice(indexOfBookToBeDeleted,1);

    writeFile(bookStoreData).then((response)=>{
        return 1;
    }).catch((e) => {
        return 0;
    });
 }