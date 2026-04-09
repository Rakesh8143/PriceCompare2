// ─── PriceHunt API Server ──────────────────────────────────────────────────────
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { storageMode } from './services/userService.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}));
app.use(express.json({ limit: '1mb' }));

// Request logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    const icon = res.statusCode < 400 ? '✓' : '✗';
    console.log(`${icon} ${req.method} ${req.path} → ${res.statusCode} (${ms}ms)`);
  });
  next();
});

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    version: '2.0.0',
    userStorage: storageMode(),
    timestamp: new Date().toISOString(),
  });
});

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ── Bootstrap ─────────────────────────────────────────────────────────────────
async function bootstrap() {
  // Attempt MongoDB connection — server starts regardless of outcome
  await connectDB();

  app.listen(PORT, () => {
    console.log(`\n🚀 PriceHunt API  →  http://localhost:${PORT}`);
    console.log(`   User storage    →  ${storageMode()}`);
    console.log(`   Demo login      →  demo@pricecompare.in / demo1234`);
    if (storageMode() === 'in-memory') {
      console.log(`\n   ℹ️  Set MONGO_URI in .env to enable persistent user storage.\n`);
    }
  });
}

bootstrap();
