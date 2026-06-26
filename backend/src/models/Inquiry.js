const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // Optional, can be submitted as a guest
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    lowercase: true,
  },
  phone: {
    type: String,
    default: '',
  },
  subject: {
    type: String,
    default: 'General Inquiry',
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Please add a message'],
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved'],
    default: 'Pending',
  },
  prototypeDetails: {
    type: mongoose.Schema.Types.Mixed, // Stores the AI Assistant generated blueprint if applicable
    default: null,
  },
  replies: [
    {
      sender: {
        type: String, // 'Admin' or 'User' or Name
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Inquiry', InquirySchema);
