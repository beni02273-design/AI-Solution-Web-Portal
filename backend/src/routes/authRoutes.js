const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe, changePassword, googleAuth } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google', googleAuth);
router.get('/me', protect, getMe);
router.post('/change-password', protect, changePassword);

module.exports = router;
