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
  heroPreheading: {
    type: String,
    required: true,
    default: 'AI · SUNDERLAND · UK',
  },
  heroTitle: {
    type: String,
    required: true,
    default: 'Empowering Ideas with AI Excellence',
  },
  heroSubtitle: {
    type: String,
    required: true,
    default: 'AI-Solutions builds intelligent virtual assistants and affordable AI prototypes that accelerate design, engineering and innovation — so your people can do their best work.',
  },
  heroImage: {
    type: String,
    required: true,
    default: 'https://kindred-ai-vision.lovable.app/assets/hero-person-D8M9l6CF.jpg',
  },
  aboutTitle: {
    type: String,
    required: true,
    default: 'About Our Company',
  },
  aboutText: {
    type: String,
    required: true,
    default: 'AI-Solutions is the partner of choice for leading enterprises and growing businesses. From our headquarters in Sunderland we deliver AI software, prototypes and consultancy that put people first.',
  },
  aboutImage: {
    type: String,
    required: true,
    default: 'https://kindred-ai-vision.lovable.app/assets/why-choose-C6MgmLi8.jpg',
  },
  aboutGlobalReach: {
    type: String,
    required: true,
    default: 'Trusted by teams across the UK, EU and beyond.',
  },
  aboutAwardWinning: {
    type: String,
    required: true,
    default: 'Recognised for AI innovation in employee experience.',
  },
  aboutClientsPct: {
    type: String,
    required: true,
    default: '98%',
  },
  aboutProjectsCount: {
    type: String,
    required: true,
    default: '590+',
  },
  whyChooseUsTitle: {
    type: String,
    required: true,
    default: 'Trusted by teams that ship at scale',
  },
  whyChooseUsText: {
    type: String,
    required: true,
    default: 'From Sunderland to Singapore, leading brands choose AI-Solutions as their AI partner.',
  },
  bottomCtaTitle: {
    type: String,
    required: true,
    default: 'Ready to bring AI into your business?',
  },
  bottomCtaText: {
    type: String,
    required: true,
    default: 'Talk to our team in Sunderland about an AI virtual assistant, a rapid prototype or a full custom build.',
  },
});

module.exports = mongoose.model('SiteSettings', SiteSettingsSchema);
