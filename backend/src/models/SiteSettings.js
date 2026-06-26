const mongoose = require('mongoose');

const SiteSettingsSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    default: 'AI-Solutions',
  },
  mission: {
    type: String,
    required: true,
    default: 'To innovate, promote, and deliver the future of the digital employee experience, with a strong focus on supporting people at work.',
  },
  officeAddress: {
    type: String,
    required: true,
    default: 'Sunderland Software Centre, Tavistock Place, Sunderland, UK',
  },
  officePhone: {
    type: String,
    required: true,
    default: '+44 191 000 0000',
  },
  officeEmail: {
    type: String,
    required: true,
    default: 'hello@ai-solutions.co.uk',
  },
  heroTitle: {
    type: String,
    required: true,
    default: 'Let\'s build something intelligent',
  },
  heroSubtitle: {
    type: String,
    required: true,
    default: 'Tell us about your project — we\'ll respond within one working day.',
  },
});

module.exports = mongoose.model('SiteSettings', SiteSettingsSchema);
