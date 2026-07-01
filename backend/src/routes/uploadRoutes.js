const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadImage } = require('../controllers/uploadController');
const { protect, adminOnly } = require('../middleware/auth');

// Multer memory storage configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
});

// POST /api/upload - Upload an image to Cloudinary (Admin only)
router.post('/', protect, adminOnly, upload.single('image'), uploadImage, (error, req, res, next) => {
  // Handle multer error or file filter error
  res.status(400).json({ success: false, message: error.message });
});

module.exports = router;
