const mongoose = require('../Db/mongoose.js');
const validator = require('validator');

const Author = mongoose.model("Author",{
    Name: {
        type: String,
        required: true
    },
    Gender: {
        type: String
    },
    EmailId:{
        type: String,
        required: true,
        lowercase: true,
        trim:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error('Invalid Email Id');
            }
        }
    },
    Age: {
        type: Number,
        default: 0,
        validate(value)
        {
            if(value<0)
                throw new Error("Age must be positive number.");
        }
    }
});

module.exports = Author;
