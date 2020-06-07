var userService = require('../services/user.service.js');

exports.getUser = async (req, res) => {
    try {
        let user = await userService.getUser(req.params.id);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

exports.getUsers = async (req, res) => {
    try {
        let users = await userService.getUsers();
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

exports.createUser = async (req, res) => {
    try {
        let user = await userService.createUser(req.body.Name,req.body.Age,req.body.EmailId,req.body.Password);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

exports.updateUser = async (req, res) => {
    try {
        let user = await userService.updateUser(req.params.id,req.body.Name,req.body.Age,req.body.EmailId,req.body.Password);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let user = await userService.deleteUser(req.params.id);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
