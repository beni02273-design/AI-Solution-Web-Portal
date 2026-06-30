const Partner = require('../models/Partner');

// @desc    Get all partners
// @route   GET /api/partners
// @access  Public
const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find().sort({ createdAt: 1 });
    res.json({ success: true, count: partners.length, data: partners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a partner
// @route   POST /api/partners
// @access  Private/Admin
const createPartner = async (req, res) => {
  const { name, logoUrl } = req.body;

  try {
    const partner = await Partner.create({ name, logoUrl });
    res.status(201).json({ success: true, data: partner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a partner
// @route   PUT /api/partners/:id
// @access  Private/Admin
const updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }

    res.json({ success: true, data: partner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a partner
// @route   DELETE /api/partners/:id
// @access  Private/Admin
const deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);

    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }

    res.json({ success: true, message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getPartners,
  createPartner,
  updatePartner,
  deletePartner,
};
