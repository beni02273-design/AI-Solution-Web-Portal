const SiteSettings = require('../models/SiteSettings');
const User = require('../models/User');
const Inquiry = require('../models/Inquiry');
const Service = require('../models/Service');
const Event = require('../models/Event');
const Blog = require('../models/Blog');

// @desc    Get site settings
// @route   GET /api/settings
// @access  Public
const getSettings = async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();

    // Create default settings if none exist
    if (!settings) {
      settings = await SiteSettings.create({});
    }

    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update site settings
// @route   PUT /api/settings
// @access  Private/Admin
const updateSettings = async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();

    if (!settings) {
      settings = await SiteSettings.create(req.body);
    } else {
      settings = await SiteSettings.findByIdAndUpdate(settings._id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get dashboard analytics
// @route   GET /api/settings/analytics
// @access  Private/Admin
const getAnalytics = async (req, res) => {
  try {
    const userCount = await User.countDocuments({ role: 'user' });
    const adminCount = await User.countDocuments({ role: 'admin' });
    const serviceCount = await Service.countDocuments();
    const blogCount = await Blog.countDocuments();
    const eventCount = await Event.countDocuments();
    const inquiryCount = await Inquiry.countDocuments();

    // Breakdown of inquiries by status
    const pendingInquiries = await Inquiry.countDocuments({ status: 'Pending' });
    const inProgressInquiries = await Inquiry.countDocuments({ status: 'In Progress' });
    const resolvedInquiries = await Inquiry.countDocuments({ status: 'Resolved' });

    // Events attendance breakdown
    const events = await Event.find().select('title attendees');
    const eventAttendance = events.map(e => ({
      title: e.title,
      attendeesCount: e.attendees.length,
    }));

    res.json({
      success: true,
      data: {
        users: userCount,
        admins: adminCount,
        services: serviceCount,
        blogs: blogCount,
        events: eventCount,
        inquiries: inquiryCount,
        inquiriesBreakdown: {
          pending: pendingInquiries,
          inProgress: inProgressInquiries,
          resolved: resolvedInquiries,
        },
        eventAttendance,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getSettings,
  updateSettings,
  getAnalytics,
};
