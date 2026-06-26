const express = require('express');
const router = express.Router();
const { getSettings, updateSettings, getAnalytics } = require('../controllers/settingsController');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
  .get(getSettings)
  .put(protect, adminOnly, updateSettings);

router.get('/analytics', protect, adminOnly, getAnalytics);

module.exports = router;
