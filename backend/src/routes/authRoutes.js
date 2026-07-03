const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  getMe, 
  changePassword, 
  googleAuth,
  getAllUsers,
  updateUserByAdmin,
  deleteUserByAdmin
} = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google', googleAuth);
router.get('/me', protect, getMe);
router.post('/change-password', protect, changePassword);

// Administrative User Management Routes
router.get('/users', protect, adminOnly, getAllUsers);
router.put('/users/:id', protect, adminOnly, updateUserByAdmin);
router.delete('/users/:id', protect, adminOnly, deleteUserByAdmin);

module.exports = router;
