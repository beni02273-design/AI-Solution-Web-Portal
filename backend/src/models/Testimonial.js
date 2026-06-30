const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    default: 5,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
