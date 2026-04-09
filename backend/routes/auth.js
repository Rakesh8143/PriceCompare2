// ─── Auth Routes ──────────────────────────────────────────────────────────────
import { Router } from 'express';
import {
  findByEmail,
  findByEmailWithPassword,
  findById,
  createUser,
  verifyPassword,
  safeUser,
  storageMode,
} from '../services/userService.js';
import { generateToken, authMiddleware } from '../middleware/auth.js';

const router = Router();

// ── POST /api/auth/register ───────────────────────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name?.trim() || !email?.trim() || !password) {
      return res.status(400).json({ error: 'Name, email and password are required.' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // Duplicate check
    const existing = await findByEmail(email);
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }

    const user = await createUser({ name: name.trim(), email, password });
    const token = generateToken({ id: user.id || user._id?.toString(), email: user.email, name: user.name });

    return res.status(201).json({
      token,
      user: safeUser(user),
      storage: storageMode(), // informational — helps during development
    });
  } catch (err) {
    console.error('[register]', err.message);
    // Surface Mongoose validation errors clearly
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: messages.join('. ') });
    }
    if (err.code === 11000) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

// ── POST /api/auth/login ──────────────────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Fetch user with password hash
    const user = await findByEmailWithPassword(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const valid = await verifyPassword(user, password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const userId = user.id || user._id?.toString();
    const token = generateToken({ id: userId, email: user.email, name: user.name });

    return res.json({
      token,
      user: safeUser(user),
      storage: storageMode(),
    });
  } catch (err) {
    console.error('[login]', err.message);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

// ── GET /api/auth/me ──────────────────────────────────────────────────────────
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(safeUser(user));
  } catch (err) {
    console.error('[me]', err.message);
    res.status(500).json({ error: 'Could not fetch user profile.' });
  }
});

export default router;
