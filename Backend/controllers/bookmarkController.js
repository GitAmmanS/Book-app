const Bookmark = require('../models/t4BookMarkSchema');

exports.createBookmark = async (req, res) => {
    try {
        const newBookmark = new Bookmark(req.body);
        await newBookmark.save();
        res.status(201).send('Bookmark inserted successfully');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.deleteBookmark = async (req, res) => {
    try {
        const { userId, bookId } = req.query;
        let query = {};
        if (userId) {
            query.user_id = userId;
        }
        if (bookId) {
            query.book_id = bookId;
        }

        const result = await Bookmark.deleteOne(query);
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "No matching bookmark found for deletion" });
        }
        res.status(200).json({ message: "Bookmark deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
