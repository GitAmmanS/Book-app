 
const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');

router.post('/', bookmarkController.createBookmark);
router.delete('/delete', bookmarkController.deleteBookmark);

module.exports = router;
