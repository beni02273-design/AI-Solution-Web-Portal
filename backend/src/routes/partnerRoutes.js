const express = require('express');
const router = express.Router();
const { getPartners, createPartner, updatePartner, deletePartner } = require('../controllers/partnerController');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
  .get(getPartners)
  .post(protect, adminOnly, createPartner);

router.route('/:id')
  .put(protect, adminOnly, updatePartner)
  .delete(protect, adminOnly, deletePartner);

module.exports = router;
