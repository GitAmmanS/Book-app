 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require('cors')
const path = require('path');
// Load environment variables from .env file
dotenv.config();

const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
const readingHistoryRoutes = require('./routes/readingHistoryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
//doing static

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/author', authorRoutes);
app.use('/category', categoryRoutes);
app.use('/bookmark', bookmarkRoutes);
app.use('/readinghistory', readingHistoryRoutes);

app.use("/public", express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
