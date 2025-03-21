 
const express = require('express');
const router = express.Router();
const readingHistoryController = require('../controllers/readingHistoryController');

router.post('/', readingHistoryController.createReadingHistory);
router.get('/get-reading', readingHistoryController.getReadingHistory);

module.exports = router;
