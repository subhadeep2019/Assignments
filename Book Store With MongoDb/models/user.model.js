var mongoose = require('../Db/mongoose.js');
const validator = require('validator'); 

const User = mongoose.model('User',{
    Name: {
        type: String,
        trim: true,
        required: true
    },
    EmailId: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error('Invalid Email Id');
            }
        }
    },
    Password: {
        type: String,
        trim: true,
        required: true
    },
    Age: {
        type: Number,
        trim: true,
        required: true
    }
});

module.exports = User;
