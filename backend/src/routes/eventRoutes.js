const express = require('express');
const router = express.Router();
const { getEvents, createEvent, updateEvent, deleteEvent, registerForEvent } = require('../controllers/eventController');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
  .get(getEvents)
  .post(protect, adminOnly, createEvent);

router.route('/:id')
  .put(protect, adminOnly, updateEvent)
  .delete(protect, adminOnly, deleteEvent);

router.post('/:id/register', protect, registerForEvent);

module.exports = router;
