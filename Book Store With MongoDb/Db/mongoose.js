var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/bookstore",{
    useNewUrlParser: true,
    useCreateIndex: true
})

module.exports = mongoose;