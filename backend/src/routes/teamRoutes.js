const express = require('express');
const router = express.Router();
const { getTeam, createTeamMember, updateTeamMember, deleteTeamMember } = require('../controllers/teamController');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
  .get(getTeam)
  .post(protect, adminOnly, createTeamMember);

router.route('/:id')
  .put(protect, adminOnly, updateTeamMember)
  .delete(protect, adminOnly, deleteTeamMember);

module.exports = router;
