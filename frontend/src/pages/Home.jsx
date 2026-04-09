import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import { getCategoryIcon } from '../utils/helpers';

const CATEGORIES = [
  { id: 'smartphones',   label: 'Smartphones' },
  { id: 'laptops',       label: 'Laptops' },
  { id: 'audio',         label: 'Audio' },
  { id: 'televisions',   label: 'TVs' },
  { id: 'appliances',    label: 'Appliances' },
  { id: 'wearables',     label: 'Wearables' },
  { id: 'sports',        label: 'Sports' },
  { id: 'groceries',     label: 'Groceries' },
  { id: 'furniture',     label: 'Furniture' },
  { id: 'personal_care', label: 'Personal Care' },
];

const TRENDING = ['iPhone 15', 'Samsung Galaxy S24', 'Sony WH-1000XM5', 'Apple Watch', 'Wakefit Mattress', 'Dyson V15', 'Garmin Fenix', 'MacBook Pro'];

export default function Home() {
  const [query, setQuery] = useState('');
  const [featured, setFeatured] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/products/featured')
      .then(r => setFeatured(r.data.products || []))
      .catch(() => {})
      .finally(() => setLoadingFeatured(false));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,107,53,0.12) 0%, transparent 60%), var(--bg-primary)',
        padding: '80px 24px 60px',
        textAlign: 'center',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent-dim)', border: '1px solid var(--accent)', borderRadius: 100, padding: '4px 14px', fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>
            🇮🇳 Compare across Amazon, Flipkart & Croma
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 60px)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800, marginBottom: 16, lineHeight: 1.1,
            background: 'linear-gradient(135deg, #fff 50%, var(--accent))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Find the best price.<br />Every time.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', marginBottom: 36, lineHeight: 1.6 }}>
            We scan India's top stores in real-time and rank deals by price,<br />
            discount, rating and delivery speed — so you don't have to.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch}>
            <div style={{ display: 'flex', gap: 10, maxWidth: 560, margin: '0 auto 20px' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: 18 }}>🔍</span>
                <input
                  className="input"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search for iPhone, laptop, headphones…"
                  style={{ paddingLeft: 42, height: 52, fontSize: 15 }}
                  autoFocus
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ height: 52, padding: '0 28px', fontSize: 15, flexShrink: 0 }}>
                Search
              </button>
            </div>
          </form>

          {/* Trending */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Trending:</span>
            {TRENDING.map(t => (
              <button key={t} onClick={() => navigate(`/search?q=${encodeURIComponent(t)}`)}
                style={{ fontSize: 12, padding: '4px 12px', borderRadius: 100, border: '1px solid var(--border)', color: 'var(--text-secondary)', background: 'var(--bg-card)', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-secondary)'; }}
              >{t}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div style={{ padding: '28px 24px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id}
              onClick={() => navigate(`/search?q=${cat.id}`)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', borderRadius: 100,
                border: '1px solid var(--border)', background: 'var(--bg-card)',
                color: 'var(--text-secondary)', fontSize: 14, fontWeight: 500,
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-card)'; }}
            >
              <span style={{ fontSize: 18 }}>{getCategoryIcon(cat.id)}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured products */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700 }}>🔥 Featured Deals</h2>
          <button className="btn btn-ghost" style={{ fontSize: 13 }} onClick={() => navigate('/search?q=')}>
            View all →
          </button>
        </div>

        {loadingFeatured ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {Array(8).fill(0).map((_, i) => (
              <div key={i} style={{ height: 340, borderRadius: 'var(--radius-lg)' }} className="skeleton" />
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {featured.map((p, i) => (
              <div key={p.id} style={{ animationDelay: `${i * 60}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Value props */}
      <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {[
            { icon: '⚡', title: 'Real-time Prices', desc: 'We fetch live prices from all platforms simultaneously.' },
            { icon: '🏆', title: 'Smart Deal Scoring', desc: 'Our algorithm ranks deals by price, rating, discount & delivery.' },
            { icon: '📈', title: 'Price History', desc: 'See 12-month price trends to know when to buy.' },
            { icon: '🔔', title: 'All Platforms', desc: 'Amazon, Flipkart and Croma compared side by side.' },
          ].map(f => (
            <div key={f.title} style={{ textAlign: 'center', padding: '20px 16px' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
