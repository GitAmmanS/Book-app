const Book = require('../models/t4BookSchema');
exports.createBook = async (req, res) => {
    try {
        const { title, description, author, category } = req.body;
        const coverImage = req.files['coverImage'] ? req.files['coverImage'][0].path : null;
        const pdfFile = req.files['pdfFile'] ? req.files['pdfFile'][0].path : null;

        const newBook = new Book({
            title,
            description,
            coverImage,
            pdfFile,
            author,
            category
        });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const { bookId, categoryId, authorId } = req.query;

        // Initialize the query object
        let query = {};

        // Add conditions to the query object based on the provided parameters
        if (bookId) {
            query._id = bookId;
        }
        if (categoryId) {
            query.category = categoryId;
        }
        if (authorId) {
            query.author = authorId;
        }

        // Find books that match any of the provided criteria
        const books = await Book.find(query)
                                .populate('author')
                                .populate('category');

        if (!books || books.length === 0) {
            return res.status(404).json({ error: 'No books found' });
        }

        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getBooks1 = async (req, res) => {
    try {
        const books = await Book.find().populate('author').populate('category'); 
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.searchBooksByName = async (req, res) => {
    try {
        const { title } = req.query;
        if (!title) {
            return res.status(400).json({ error: 'Title query parameter is required' });
        }

        const books = await Book.find({ title: { $regex: title, $options: 'i' } })
            .populate('author')
            .populate('category');
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
