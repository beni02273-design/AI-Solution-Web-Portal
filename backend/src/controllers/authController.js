const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        success: true,
        token: generateToken(user._id),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      res.status(400).json({ success: false, message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for user email
    const user = await User.findOne({ email }).select('+password');

    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        token: generateToken(user._id),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    res.json({ success: true, user: req.user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Change user password
// @route   POST /api/auth/change-password
// @access  Private
const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id).select('+password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check password matches
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Incorrect current password' });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Helper function to verify Google Access Token natively via userinfo endpoint
const https = require('https');
const verifyGoogleAccessToken = (accessToken) => {
  return new Promise((resolve, reject) => {
    https.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        if (response.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          try {
            const parsed = JSON.parse(data);
            reject(new Error(parsed.error_description || 'Invalid Google access token'));
          } catch (e) {
            reject(new Error('Invalid token response from Google userinfo API'));
          }
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// @desc    Authenticate or Register user using Google Access Token
// @route   POST /api/auth/google
// @access  Public
const googleAuth = async (req, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).json({ success: false, message: 'Google Access Token is required' });
  }

  try {
    const payload = await verifyGoogleAccessToken(accessToken);
    const { email, name } = payload;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Google token does not contain email' });
    }

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // User doesn't exist, create a new profile with Google details
      const crypto = require('crypto');
      const randomPassword = crypto.randomBytes(16).toString('hex') + 'G1!';

      user = await User.create({
        name: name || email.split('@')[0],
        email,
        password: randomPassword,
      });

      // Log a welcome notification
      const Notification = require('../models/Notification');
      await Notification.create({
        userId: user._id,
        title: 'Welcome to AI-Solutions!',
        message: 'Thank you for registering with Google. Open the AI Assistant chatbot in the bottom right to start drafting your project blueprints.',
      });
    }

    res.status(200).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  changePassword,
  googleAuth,
};
