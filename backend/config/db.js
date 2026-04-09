// ─── MongoDB Connection ────────────────────────────────────────────────────────
// Replace MONGO_URI in your .env file with your actual MongoDB connection string.
// Supported formats:
//   Local:   mongodb://localhost:27017/pricecompare
//   Atlas:   mongodb+srv://<user>:<password>@cluster.mongodb.net/pricecompare
//
// The server starts normally even if MongoDB is unavailable — it falls back to
// in-memory user storage so the rest of the app keeps working.
// ──────────────────────────────────────────────────────────────────────────────

import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/pricecompare';

// Connection state exported so routes can check before hitting the DB
export let isMongoConnected = false;

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // fail fast if unreachable
      connectTimeoutMS: 10000,
    });

    isMongoConnected = true;
    console.log(`✅ MongoDB connected → ${sanitizeUri(MONGO_URI)}`);

    mongoose.connection.on('disconnected', () => {
      isMongoConnected = false;
      console.warn('⚠️  MongoDB disconnected. Auth will fall back to in-memory store.');
    });

    mongoose.connection.on('reconnected', () => {
      isMongoConnected = true;
      console.log('✅ MongoDB reconnected.');
    });

  } catch (err) {
    isMongoConnected = false;
    console.warn(`⚠️  MongoDB unavailable (${err.message}).`);
    console.warn('   Auth routes will use in-memory fallback until a connection is available.');
    console.warn(`   To connect, set MONGO_URI in your .env file.`);
  }
}

/** Remove credentials from URI for safe logging */
function sanitizeUri(uri) {
  try {
    const u = new URL(uri);
    if (u.password) u.password = '****';
    return u.toString();
  } catch {
    return uri.replace(/:\/\/.*@/, '://<credentials>@');
  }
}

export default mongoose;
