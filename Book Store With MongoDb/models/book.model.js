var mongoose = require("../Db/mongoose.js")

const Book = mongoose.model("Book",{
    Name: {
        type: String,
        trim: true,
        required: true
    },
    ISBN:{
        type: String,
        maxlength: 12,
        required: true
    }

});

module.exports = Book;