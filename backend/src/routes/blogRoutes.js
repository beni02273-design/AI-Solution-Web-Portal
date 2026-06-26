const express = require('express');
const router = express.Router();
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
  .get(getBlogs)
  .post(protect, adminOnly, createBlog);

router.route('/:id')
  .put(protect, adminOnly, updateBlog)
  .delete(protect, adminOnly, deleteBlog);

module.exports = router;
