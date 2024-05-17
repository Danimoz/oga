import mongoose, { Connection } from 'mongoose';

let cachedConnection: Connection | null = null;

export default async function dbConnect() {
  try {
    if (cachedConnection) {
      return Promise.resolve(cachedConnection);
    }

    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    cachedConnection = db.connection;
    return cachedConnection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }

}
