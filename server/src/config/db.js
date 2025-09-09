import mongoose from 'mongoose';

export async function connectDB(uri) {
  if (!uri) throw new Error('Missing MONGODB_URI in .env');

  console.log('🔌 Trying to connect to MongoDB...');
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri);
  console.log('✅ MongoDB connected');
}

export function dbStatus() {
  return mongoose.connection.readyState; // 0,1,2,3
}
