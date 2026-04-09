# 🎯 PriceHunt v2 — Product Price Comparison Platform

Full-stack price comparison with **60+ products across 10 categories**, **MongoDB persistent user storage** (with transparent in-memory fallback), and a clean modular architecture.

---

## 🆕 What's New in v2

| Area | Change |
|------|--------|
| **Mock Data** | 12 → **60+ products** across 10 categories |
| **New Categories** | wearables, sports, groceries, furniture, personal_care |
| **MongoDB** | Mongoose integration — `User` model with schema validation & pre-save hashing |
| **Fallback** | Server starts and works fully even without MongoDB (transparent in-memory fallback) |
| **User Service** | Clean `userService.js` abstraction — routes are DB-agnostic |
| **Price History** | Deterministic seeded generation — consistent results across calls |
| **Env Config** | `.env.example` template with all configurable values |

---

## 🏗 Project Structure

```
pricecompare/
├── backend/
│   ├── config/
│   │   └── db.js                  ← MongoDB connection with graceful fallback
│   ├── models/
│   │   └── User.js                ← Mongoose schema + pre-save bcrypt hook
│   ├── services/
│   │   ├── userService.js         ← DB abstraction (MongoDB ↔ in-memory)
│   │   ├── platformService.js     ← Per-platform mock API simulation
│   │   └── aggregationService.js  ← Parallel fetch + deal scoring
│   ├── routes/
│   │   ├── auth.js                ← Register / Login / Me
│   │   └── products.js            ← Search, compare, featured, categories
│   ├── middleware/
│   │   └── auth.js                ← JWT sign / verify / middleware
│   ├── data/
│   │   └── mockData.js            ← 60+ products, 3 platforms, price history
│   ├── .env.example               ← Copy to .env and configure
│   ├── package.json
│   └── server.js
│
└── frontend/
    └── src/
        ├── components/            ← Navbar, ProductCard, PlatformCard, FilterBar, Chart
        ├── pages/                 ← Home, SearchResults, Compare, Login, Register
        ├── context/               ← AuthContext (JWT)
        ├── services/              ← Axios instance
        └── utils/                 ← Helpers, formatters
```

---

## 🚀 Setup & Run

### 1. Backend

```bash
cd backend

# Install dependencies (includes mongoose + dotenv)
npm install

# Configure environment
cp .env.example .env
# Edit .env → paste your MongoDB URI

# Start
npm start          # production
npm run dev        # with --watch (auto-restart)
# → http://localhost:3001
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

---

## 🔐 Demo Credentials
| Field | Value |
|-------|-------|
| Email | `demo@pricecompare.in` |
| Password | `demo1234` |

---

## 🗄 MongoDB Setup

### Atlas (Cloud — recommended)
1. Create a free cluster at https://cloud.mongodb.com
2. Create a DB user → get the connection string
3. Add to `backend/.env`:
```env
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/pricecompare
```

### Local
```env
MONGO_URI=mongodb://localhost:27017/pricecompare
```

### No MongoDB?
The server detects unavailability on startup and logs a warning. All features continue working — registered users are held in memory for that session.

---

## 🗂 Product Catalog (v2)

| Category | Count | Sample Brands |
|----------|-------|---------------|
| `smartphones` | 8 | Apple, Samsung, OnePlus, Google, Motorola, Xiaomi, Realme, iQOO |
| `laptops` | 6 | Apple, Dell, HP, ASUS, Lenovo, Microsoft |
| `audio` | 7 | Sony, Bose, Apple, Samsung, JBL, Sennheiser |
| `televisions` | 4 | LG, Samsung, Sony, Xiaomi |
| `appliances` | 5 | Dyson, Philips, LG, Voltas, Prestige |
| `wearables` | 6 | Apple, Samsung, Garmin, Fitbit, boAt, Noise |
| `sports` | 6 | Yonex, Decathlon, Cosco, Nivia, Boldfit, Kalenji |
| `groceries` | 7 | Tata Tea, Aashirvaad, Amul, Quaker, Tropicana, Fortune |
| `furniture` | 5 | Wakefit, IKEA, Nilkamal, Urban Ladder, Hometown |
| `personal_care` | 6 | Philips, Dyson, Lakmé, Himalaya, Neutrogena, Havells |

**60+ products × 3 platforms = 150+ price listings**

---

## 📡 API Reference

### Auth
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | ❌ | Create new account |
| POST | `/api/auth/login` | ❌ | Login |
| GET | `/api/auth/me` | ✅ Bearer | Fetch current user |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/search?q=…` | Search + filter + sort |
| GET | `/api/products/featured` | Featured products |
| GET | `/api/products/categories` | Category list with counts |
| GET | `/api/products/:id/compare` | Full platform comparison |
| GET | `/api/products/:id` | Base product info |

#### Search params: `q`, `category`, `minPrice`, `maxPrice`, `sortBy` (`relevance`\|`price_asc`\|`price_desc`\|`rating`\|`discount`), `inStockOnly`

### Health
```
GET /api/health
→ { status, version, userStorage: "mongodb"|"in-memory", timestamp }
```

---

## 🧠 Deal Scoring

| Factor | Weight |
|--------|--------|
| Price rank (lowest = best) | 40% |
| Discount % | 30% |
| Rating (3–5 normalised) | 20% |
| Delivery speed | 10% |
| Out-of-stock penalty | −15 pts |

Score: 0–100. Top scorer is crowned **BEST DEAL**.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js 18 + Express 4 (ESM) |
| Database | MongoDB + Mongoose 8 |
| Auth | JWT + bcryptjs |
| Config | dotenv |
| Frontend | React 18 + Vite 5 |
| Routing | React Router v6 |
| HTTP | Axios |
| Charts | Chart.js + react-chartjs-2 |
| Fonts | Syne + DM Sans |
