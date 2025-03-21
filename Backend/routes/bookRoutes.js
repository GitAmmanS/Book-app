 
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.post('/books', uploadMiddleware.fields([
    { name: 'coverImage', maxCount: 1 },
    { name: 'pdfFile', maxCount: 1 }
]), bookController.createBook);

router.get('/books/search1', bookController.getBooks);
router.get('/books', bookController.getBooks1);
router.get('/books/search', bookController.searchBooksByName);

module.exports = router;
