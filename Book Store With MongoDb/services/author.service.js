var authorModel = require('../models/author.model.js');

exports.getAuthors = async () =>{
    authorModel.find({},(error,authors)=>{
         if(error)
              throw error;
         else
              return authors;               
    })
}

exports.createAuthor = async (name, age, gender,emailId)=>{
     const author = new authorModel({
        Name: name,
        Gender: gender,
        Age: age,
        EmailId: emailId
     })

     try
     {
         await author.save();                
         return author;
     }
     catch(error)
     {
        throw error;
     }
}

exports.updateAuthor = async (authorId,name, age, gender,emailId)=>{
     try
     {
         let author = await authorModel.findByIdAndUpdate(authorId, {Name: name, Age: age, Gender:gender, EmailId:emailId}, {new: true, runValidators: true})
         return author;
     }
     catch(err)
     {
         throw err;
     }
}

exports.deleteAuthor = async (authorId)=>{
    try
    {
        let author = await authorModel.findByIdAndDelete(authorId)
        return author;
    }
    catch(err)
    {
        throw err;
    }
}