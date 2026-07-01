const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/services', require('./src/routes/serviceRoutes'));
app.use('/api/blogs', require('./src/routes/blogRoutes'));
app.use('/api/events', require('./src/routes/eventRoutes'));
app.use('/api/gallery', require('./src/routes/galleryRoutes'));
app.use('/api/inquiries', require('./src/routes/inquiryRoutes'));
app.use('/api/settings', require('./src/routes/settingsRoutes'));
app.use('/api/notifications', require('./src/routes/notificationRoutes'));
app.use('/api/team', require('./src/routes/teamRoutes'));
app.use('/api/testimonials', require('./src/routes/testimonialRoutes'));
app.use('/api/partners', require('./src/routes/partnerRoutes'));
app.use('/api/upload', require('./src/routes/uploadRoutes'));

// Serve Static Assets in production/development
app.use(express.static(path.join(__dirname, '../frontend')));

// Fallback to frontend index.html for SPA router
app.get('*any', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
