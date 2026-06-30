const TeamMember = require('../models/TeamMember');

// @desc    Get all team members
// @route   GET /api/team
// @access  Public
const getTeam = async (req, res) => {
  try {
    const team = await TeamMember.find().sort({ createdAt: 1 });
    res.json({ success: true, count: team.length, data: team });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a new team member
// @route   POST /api/team
// @access  Private/Admin
const createTeamMember = async (req, res) => {
  const { name, role, image } = req.body;

  try {
    const member = await TeamMember.create({ name, role, image });
    res.status(201).json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a team member
// @route   PUT /api/team/:id
// @access  Private/Admin
const updateTeamMember = async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!member) {
      return res.status(404).json({ success: false, message: 'Team member not found' });
    }

    res.json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a team member
// @route   DELETE /api/team/:id
// @access  Private/Admin
const deleteTeamMember = async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndDelete(req.params.id);

    if (!member) {
      return res.status(404).json({ success: false, message: 'Team member not found' });
    }

    res.json({ success: true, message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getTeam,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
};
