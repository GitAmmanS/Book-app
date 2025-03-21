 
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    coverImage: {
        type: String,
        required:true
    },
    pdfFile: {
        type: String,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }
});

module.exports = mongoose.model('books', bookSchema);
