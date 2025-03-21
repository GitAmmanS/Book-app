 
const mongoose = require('mongoose');

const readingHistorySchema = new mongoose.Schema({
   
    start_time: Date,
    end_time: Date,
    pages_read:{
        type: Number,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books'
    }
});

module.exports = mongoose.model('readinghistories', readingHistorySchema);
