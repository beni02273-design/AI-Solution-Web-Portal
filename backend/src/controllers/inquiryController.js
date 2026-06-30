const Inquiry = require('../models/Inquiry');
const Notification = require('../models/Notification');
const Service = require('../models/Service');
const SiteSettings = require('../models/SiteSettings');

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get logged in user's inquiries
// @route   GET /api/inquiries/my
// @access  Private
const getMyInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Submit a contact inquiry
// @route   POST /api/inquiries
// @access  Public
const submitInquiry = async (req, res) => {
  const { name, email, phone, subject, message, prototypeDetails } = req.body;

  try {
    const inquiryData = {
      name,
      email,
      phone,
      subject,
      message,
      prototypeDetails: prototypeDetails || null,
    };

    // If user is logged in, bind profile ID
    if (req.user) {
      inquiryData.user = req.user.id;
    }

    const inquiry = await Inquiry.create(inquiryData);

    // Create system notification for logged in users
    if (req.user) {
      await Notification.create({
        user: req.user.id,
        title: 'Inquiry Submitted',
        message: `Your inquiry regarding "${subject}" has been successfully logged. Our Sunderland team will reply shortly.`,
      });
    }

    res.status(201).json({ success: true, data: inquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Reply to an inquiry (Admin only)
// @route   POST /api/inquiries/:id/reply
// @access  Private/Admin
const replyInquiry = async (req, res) => {
  const { text } = req.body;

  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }

    // Append reply
    inquiry.replies.push({
      sender: 'Admin (AI-Solutions)',
      text,
      createdAt: new Date(),
    });

    // Update status to In Progress or Resolved depending on content
    inquiry.status = 'Resolved';
    await inquiry.save();

    // Create notification for the user if the inquiry was associated with an account
    if (inquiry.user) {
      await Notification.create({
        user: inquiry.user,
        title: 'New Reply Received',
        message: `An admin has replied to your inquiry: "${inquiry.subject}". Check your dashboard to view details.`,
      });
    }

    res.json({ success: true, message: 'Reply sent successfully', data: inquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Virtual Assistant Chat Endpoint
// @route   POST /api/inquiries/chat-assistant
// @access  Public
const chatAssistant = async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ success: false, message: 'Message is required' });
  }

  const query = message.toLowerCase();
  let replyText = '';
  let prototypeDetails = null;

  try {
    const settings = await SiteSettings.findOne() || {
      mission: 'To deliver premium digital employee experiences.',
      officeAddress: 'Sunderland Software Centre, Tavistock Place, Sunderland, UK',
      officePhone: '+44 191 000 0000',
      officeEmail: 'hello@ai-solutions.co.uk'
    };

    if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
      replyText = `Hello! I am the AI-Solutions Virtual Assistant. 🤖 It is great to connect with you today! I can help you explore our services, give you details about our Sunderland headquarters, or even generate a customized project prototype blueprint for your startup idea.\n\nWhat kind of project are you thinking of building? Tell me a bit about it and we can design a blueprint together!`;
    } else if (query.includes('office') || query.includes('address') || query.includes('location') || query.includes('sunderland')) {
      replyText = `We are proudly based in Sunderland, UK! 🇬🇧\n\nOur headquarters is located at:\n**${settings.officeAddress}**\n\nIt is a modern, high-tech engineering hub located right next to Mowbray Park, just a 3-minute walk from Sunderland Central train station. If you'd like to get in touch, you can reach us on **${settings.officePhone}** or email us at **${settings.officeEmail}**. Feel free to stop by if you're in the area!`;
    } else if (query.includes('mission') || query.includes('aim') || query.includes('goal')) {
      replyText = `At AI-Solutions, our core mission is:\n\n*"${settings.mission}"*\n\nWe focus on utilizing AI and modern software design to support employee teams, automate complex tasks, and make digital workflows a positive experience. Let me know if you would like to see how our services align with this goal!`;
    } else if (query.includes('services') || query.includes('what do you do') || query.includes('help')) {
      const services = await Service.find().limit(4);
      const serviceList = services.map(s => `• **${s.title}**: ${s.description}`).join('\n');
      replyText = `We offer a wide range of expert services tailored for business transformation:\n\n${serviceList || '• AI Virtual Assistant\n• Rapid AI Prototyping\n• Custom Software Development\n• Digital Employee Experience consultancy'}\n\nIf you have a specific project idea in mind, just ask me to **"generate a prototype for my e-commerce"** or describe your concept, and I'll create a step-by-step blueprint with cost estimations for you!`;
    } else if (
      query.includes('prototype') ||
      query.includes('build') ||
      query.includes('app') ||
      query.includes('website') ||
      query.includes('cost') ||
      query.includes('estimate') ||
      query.includes('project')
    ) {
      let projectType = 'Custom Platform';
      let stack = 'MongoDB, Express.js, React, Node.js (MERN stack)';
      let features = ['Secure Auth', 'Responsive Dashboard', 'AI Integration Module', 'Database Logging'];
      let schema = 'User: { id, email, role }; Logs: { action, timestamp, userId }';
      let estimate = '£1,500 - £2,800';
      let timeframe = '2-3 weeks';

      if (query.includes('e-commerce') || query.includes('shop') || query.includes('store') || query.includes('cart')) {
        projectType = 'AI-Driven E-Commerce Portal';
        stack = 'MongoDB, Express.js, React, Node.js, Stripe API, Cloudinary';
        features = ['Product Catalog Search', 'Secure Cart & Checkout', 'Admin Inventory Manager', 'Stripe Gateway Integration', 'AI Customer Product Advisor'];
        schema = 'Product: { name, price, stock, image }; Order: { user, items: [], total, paymentStatus }; User: { email, cart }';
        estimate = '£2,200 - £4,500';
        timeframe = '3-4 weeks';
      } else if (query.includes('portfolio') || query.includes('blog') || query.includes('personal')) {
        projectType = 'Responsive Creative Portfolio';
        stack = 'HTML5/Vanilla CSS, JavaScript, Node.js, Markdown Engine';
        features = ['Dynamic Projects Showcase', 'Rich Blogs Page', 'Contact Message Routing', 'Site SEO Configuration', 'Integrated Chat Widget'];
        schema = 'BlogPost: { title, slug, content, tags, createdAt }; Message: { name, email, text }';
        estimate = '£500 - £950';
        timeframe = '1-2 weeks';
      } else if (query.includes('saas') || query.includes('dashboard') || query.includes('crm') || query.includes('b2b')) {
        projectType = 'B2B Analytics SaaS Platform';
        stack = 'MongoDB, Express.js, TailwindCSS, ChartJS, React, JWT auth';
        features = ['Multi-Tenant Billing', 'Interactive Analytics Dashboard', 'Report Exporting (PDF/CSV)', 'Role-based Access permissions', 'Team Invites Module'];
        schema = 'Tenant: { name, subscription }; User: { tenantId, email, role }; AnalyticsData: { metrics, timestamp }';
        estimate = '£3,500 - £7,000';
        timeframe = '4-6 weeks';
      } else if (query.includes('mobile') || query.includes('android') || query.includes('ios') || query.includes('phone')) {
        projectType = 'Cross-Platform Mobile Application';
        stack = 'React Native, Node.js, Firebase Auth & Push Notifications';
        features = ['Native Push Alerts', 'Offline Sync Storage', 'Map Location Services', 'In-App Message System', 'Camera Asset Uploads'];
        schema = 'UserProfile: { phone, avatar, coordinates }; Notification: { title, readStatus }';
        estimate = '£3,000 - £6,000';
        timeframe = '4-5 weeks';
      }

      replyText = `That sounds like a brilliant project! To help you plan, I have compiled a **Rapid Prototyping Blueprint** for your **${projectType}**.\n\nYou can review the recommended technical details in the card below. If you're signed in, you can click **"Save Prototype to Inquiries"** to add this plan straight to your dashboard profile. Our engineering team in Sunderland will review it and get back to you!`;

      prototypeDetails = {
        projectName: projectType,
        techStack: stack,
        features: features,
        databaseSchema: schema,
        pricing: estimate,
        timeframe: timeframe,
      };
    } else {
      replyText = `I would love to help you with that! To give you the most accurate response, could you describe what you're hoping to build or what details you need?\n\nFor example, if you are looking for a price estimate, try asking **"how much to build a SaaS dashboard app?"** or **"need an e-commerce website prototype"**, and I will generate a comprehensive blueprint for you.`;
    }

    res.json({
      success: true,
      replyText,
      prototypeDetails,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getInquiries,
  getMyInquiries,
  submitInquiry,
  replyInquiry,
  chatAssistant,
};
