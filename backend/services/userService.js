// ─── User Service ─────────────────────────────────────────────────────────────
// Provides a clean interface for all user operations.
// Automatically routes to MongoDB when connected, falls back to in-memory store
// when MongoDB is unavailable — keeping the app functional in all environments.
// ──────────────────────────────────────────────────────────────────────────────

import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.js';
import { isMongoConnected } from '../config/db.js';

// ── In-memory fallback store (pre-seeded with demo user) ─────────────────────
const IN_MEMORY_USERS = [
  {
    id: 'demo-user-001',
    name: 'Demo User',
    email: 'demo@pricecompare.in',
    // bcrypt hash of "demo1234"
    password: '$2a$12$LQv3c1yqBWVHxkd0LQ1Ns.2XWLkqSdxB6X5P9mZaFT8cq3V7Jyz4K',
    createdAt: new Date('2024-01-15T10:00:00Z'),
    updatedAt: new Date('2024-01-15T10:00:00Z'),
  },
];

function useDB() {
  return isMongoConnected;
}

// ── findByEmail ───────────────────────────────────────────────────────────────
export async function findByEmail(email) {
  if (useDB()) {
    return User.findOne({ email: email.toLowerCase().trim() });
  }
  return IN_MEMORY_USERS.find(u => u.email === email.toLowerCase().trim()) || null;
}

// ── findByEmailWithPassword — includes password hash for auth ─────────────────
export async function findByEmailWithPassword(email) {
  if (useDB()) {
    return User.findByEmailWithPassword(email);
  }
  return IN_MEMORY_USERS.find(u => u.email === email.toLowerCase().trim()) || null;
}

// ── findById ──────────────────────────────────────────────────────────────────
export async function findById(id) {
  if (useDB()) {
    return User.findById(id);
  }
  return IN_MEMORY_USERS.find(u => u.id === id) || null;
}

// ── createUser ────────────────────────────────────────────────────────────────
export async function createUser({ name, email, password }) {
  if (useDB()) {
    const user = new User({ name, email, password }); // hashing handled by pre-save hook
    await user.save();
    return user;
  }

  // In-memory path: hash manually since there's no Mongoose middleware
  const hash = await bcrypt.hash(password, 12);
  const user = {
    id: uuidv4(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  IN_MEMORY_USERS.push(user);
  return user;
}

// ── verifyPassword — works for both DB documents and plain objects ────────────
export async function verifyPassword(user, candidatePassword) {
  if (useDB() && typeof user.comparePassword === 'function') {
    return user.comparePassword(candidatePassword);
  }
  return bcrypt.compare(candidatePassword, user.password);
}

// ── safeUser — strips password before returning to client ────────────────────
export function safeUser(user) {
  // Mongoose document → call toJSON(); plain object → spread without password
  if (user && typeof user.toJSON === 'function') {
    return user.toJSON();
  }
  const { password, ...rest } = user;
  // normalise _id / id for plain objects
  return { ...rest, id: rest.id || rest._id?.toString() };
}

// ── storageMode — for health/debug endpoint ───────────────────────────────────
export function storageMode() {
  return useDB() ? 'mongodb' : 'in-memory';
}
