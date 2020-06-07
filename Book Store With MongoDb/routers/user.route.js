const express = require('express');
const userController = require('../controllers/user.controller.js');
const router = new express.Router();

router.get("/user/:id",userController.getUser);
router.get("/users",userController.getUsers);
router.post("/user",userController.createUser);
router.patch("/user/:id",userController.updateUser);
router.delete("/user/:id",userController.deleteUser);

module.exports = router;