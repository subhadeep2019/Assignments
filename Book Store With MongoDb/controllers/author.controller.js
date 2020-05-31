var author = require("../models/author.model.js");
var authorService = require("../services/author.service.js");

exports.getAuthors = async (req,res) =>{
     try
     {
         let authors = await authorService.getAuthors();
         res.status(200).send(authors);
     }
     catch(err)
     {
          res.status(400).send(err);
     }
}

exports.createAuthor = async (req,res) => {
     try
     {
          let author = await authorService.createAuthor(req.body.Name,req.body.Age,req.body.Gender,req.body.EmailId);
          res.status(200).send(author);
     }
     catch(err)
     {
          res.status(400).send(err);
     }
}

exports.updateAuthor = async (req,res) => {
     try
     {
          let author = await authorService.updateAuthor(req.params.id,req.body.Name,req.body.Age,req.body.Gender,req.body.EmailId);
          if(!author)
          {
               res.status(400).send("Author Id doesn't exist");
          }
          res.status(200).send(author);
     }
     catch(err)
     {
          res.status(400).send(err);
     }
}

exports.deleteAuthor = async (req,res) => {
     try
     {
          let author = await authorService.deleteAuthor(req.params.id);
          if(!author)
          {
               res.status(400).send("Author Id doesn't exist");
          }
          res.status(200).send(author);
     }
     catch(err)
     {
          res.status(400).send(err);
     }
}