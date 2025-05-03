const mongoose = require('mongoose');

async function connectToMongo() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobtracker';

  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
}

module.exports = connectToMongo;
