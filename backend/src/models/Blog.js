const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a blog title'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please add blog content'],
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL'],
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'Please add an author name'],
    default: 'AI-Solutions Team',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blog', BlogSchema);
