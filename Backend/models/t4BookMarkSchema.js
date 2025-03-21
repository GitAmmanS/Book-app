 
const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    page_number: {
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('bookmarks', bookmarkSchema);
