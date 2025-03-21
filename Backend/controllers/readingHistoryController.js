 
const ReadingHistory = require('../models/t4ReadingHistorySchema');

exports.createReadingHistory = async (req, res) => {
    try {
        const newReadingHistory = new ReadingHistory(req.body);
        await newReadingHistory.save();
        res.status(201).send('Reading history inserted successfully');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getReadingHistory= async (req,res)=>{
    try{
        const { userId ,bookId }=req.query;
        let query = {};
        if (userId) {
            query.user= userId;
        }
        if (bookId) {
            query.book= bookId;
        }
        
        const Rhistory=await ReadingHistory.find(query)
        .populate('user').populate('book');
        if(!Rhistory || Rhistory.length==0){
           return res.status(404).json({error:"No books found"})
        }
        res.status(200).json(Rhistory);
    }catch(error){
        console.log(error);
    }
}
