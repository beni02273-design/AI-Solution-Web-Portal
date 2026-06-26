const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: [true, 'Please add a gallery image URL'],
  },
  category: {
    type: String,
    default: 'Team',
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Gallery', GallerySchema);
