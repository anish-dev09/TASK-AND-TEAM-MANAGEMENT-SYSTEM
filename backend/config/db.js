const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB successfully');
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB', error.message);
        console.log('\n⚠️  Please install and start MongoDB:');
        console.log('   Option 1: Install MongoDB Community - https://www.mongodb.com/try/download/community');
        console.log('   Option 2: Use MongoDB Atlas (free) - https://www.mongodb.com/cloud/atlas/register');
        console.log('\n   Then update MONGODB_URI in backend/.env file\n');
        // Don't exit, let the server run (useful for testing)
        // process.exit(1);
    }
};

module.exports = connectDB;
