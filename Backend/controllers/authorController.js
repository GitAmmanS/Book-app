const Author = require('../models/t4AuthorSchema');

exports.createAuthor = async (req, res) => {
    try {
        const { name, biography } = req.body;
        const newAuthor = new Author({
            name,
            biography,
            photo: req.file.path
        });
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getAuthor = async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors); // Use .json() for sending JSON response
    } catch (error) {
      console.error('Error fetching authors:', error);
      res.status(500).json({ message: 'Error fetching authors' }); // Send an error response with appropriate status code
    }
  };
  exports.getAuthorByName = async (req, res) => {
    try {
      const { name } = req.query;
      const authors = await Author.find({ name: { $regex: name, $options: 'i' } });
      res.status(200).json(authors); 
    } catch (error) {
      console.error('Error fetching authors:', error);
      res.status(500).json({ message: 'Error fetching authors' }); 
    }
  };