import mongoose from 'mongoose';

let isConnected = false; // Track connection state globally

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    // Check if the connection already exists
    if (mongoose.connection.readyState === 1) {
      console.log('Using existing MongoDB connection');
      isConnected = true;
      return;
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow the error for visibility
  }
};
