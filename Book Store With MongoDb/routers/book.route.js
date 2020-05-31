const express = require('express');
const bookController = require('../controllers/book.controller.js')
const router = new express.Router();

router.get("/books",bookController.getBooks);
router.post("/books",bookController.createBook);
router.patch("/books/:id",bookController.updateBook);
router.delete("/books/:id",bookController.deleteBook);

module.exports = router;
