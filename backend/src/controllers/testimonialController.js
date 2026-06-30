const Testimonial = require('../models/Testimonial');

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: 1 });
    res.json({ success: true, count: testimonials.length, data: testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private/Admin
const createTestimonial = async (req, res) => {
  const { quote, author, role, stars, image } = req.body;

  try {
    const testimonial = await Testimonial.create({ quote, author, role, stars, image });
    res.status(201).json({ success: true, data: testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a testimonial
// @route   PUT /api/testimonials/:id
// @access  Private/Admin
const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    res.json({ success: true, data: testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private/Admin
const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    res.json({ success: true, message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
