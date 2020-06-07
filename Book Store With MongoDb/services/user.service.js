var userModel = require('../models/user.model.js');

exports.getUser = async (id) => {
    return new Promise((resolve,reject)=>{
        userModel.find({ _id: id }).
        then((user) => {
            resolve(user);
        })
        .catch(err => {
            reject(err);
        });
    });    
}

exports.getUsers = async () => {
    return new Promise((resolve,reject)=>{
    userModel.find({}).
        then((users) => {
            resolve(users);
        })
        .catch(err => {
            resolve(err);
        });
    });
}

exports.createUser = async (name, age, emailid, password) => {
    let user = new userModel({
        Name: name,
        Age: age,
        EmailId: emailid,
        Password: password
    });

    try {
        await user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
}

exports.updateUser = async (userId, name, age, emailid, password) => {
    try {
        let user = userModel.findByIdAndUpdate(userId, {
            Name: name,
            Age: age,
            EmailId: emailid,
            Password: password
        }, { new: true, runValidators: true });
        return user;
    }
    catch (err) {
        throw err;
    }
}

exports.deleteUser = async (userId) => {
    try {
        let user = userModel.findByIdAndRemove(userId);
        return user;
    }
    catch (err) {
        throw err;
    }
}