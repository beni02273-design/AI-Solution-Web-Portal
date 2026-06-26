const express = require('express');
const router = express.Router();
const { getInquiries, getMyInquiries, submitInquiry, replyInquiry, chatAssistant } = require('../controllers/inquiryController');
const { protect, adminOnly, optionalProtect } = require('../middleware/auth');

router.route('/')
  .get(protect, adminOnly, getInquiries)
  .post(optionalProtect, submitInquiry);

router.get('/my', protect, getMyInquiries);
router.post('/chat-assistant', chatAssistant);
router.post('/:id/reply', protect, adminOnly, replyInquiry);

module.exports = router;
