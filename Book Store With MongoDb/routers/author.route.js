const express = require('express');
const authorController = require('../controllers/author.controller.js');
const router = new express.Router();

router.get("/authors",authorController.getAuthors);
router.post("/authors",authorController.createAuthor);
router.patch("/authors/:id",authorController.updateAuthor);
router.delete("/authors/:id",authorController.deleteAuthor);

module.exports = router;