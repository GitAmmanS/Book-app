 
const Category = require('../models/t4CategorySchema');

exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newCategory = new Category({ name, description });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getCategoryByName = async (req, res) => {
    try {
        const { name }=req.query;
        const categories = await Category.find({name:{$regex:name , $options:'i'}});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};