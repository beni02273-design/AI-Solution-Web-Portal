const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Primary database connection failed: ${error.message}`);
    console.log('Attempting connection to local MongoDB fallback...');
    try {
      const localUri = 'mongodb://127.0.0.1:27017/ai_solutions';
      const conn = await mongoose.connect(localUri);
      console.log(`MongoDB Connected (Fallback to Local): ${conn.connection.host}`);
    } catch (localError) {
      console.error(`Local fallback database connection failed: ${localError.message}`);
      console.error('MongoDB connection could not be established. Server running in offline-data mode.');
      // Do not call process.exit(1) to avoid crash loop, allowing frontend styling/testing to continue.
    }
  }
};

module.exports = connectDB;
