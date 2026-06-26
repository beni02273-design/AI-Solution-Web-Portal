const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a service title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please add a short description'],
  },
  icon: {
    type: String,
    required: [true, 'Please add a Lucide icon name'],
    default: 'cpu',
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL'],
  },
  details: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  deliveryTime: {
    type: String,
    default: '1 week',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Service', ServiceSchema);
