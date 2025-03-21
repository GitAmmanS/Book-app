 
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.post('/', uploadMiddleware.single('photo'), authorController.createAuthor);
router.get('/',authorController.getAuthor)
router.get('/name',authorController.getAuthorByName)
module.exports = router;
