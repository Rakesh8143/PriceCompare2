import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [q, setQ] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  const isHome = location.pathname === '/';

  return (
    <nav style={{
      background: 'rgba(10,10,15,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky', top: 0, zIndex: 100,
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        gap: 16, height: 64,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <span style={{ fontSize: 22 }}>🎯</span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800, fontSize: 20,
            background: 'linear-gradient(135deg, #fff 40%, var(--accent))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>PriceHunt</span>
        </Link>

        {/* Search — hidden on home page */}
        {!isHome && (
          <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: 520 }}>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
                color: 'var(--text-muted)', fontSize: 16,
              }}>🔍</span>
              <input
                className="input"
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search products, brands…"
                style={{ paddingLeft: 38, height: 40 }}
              />
            </div>
          </form>
        )}

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          {user ? (
            <>
              <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
                👋 {user.name.split(' ')[0]}
              </span>
              <button className="btn btn-ghost" onClick={logout} style={{ fontSize: 13 }}>
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost" style={{ fontSize: 14 }}>Sign in</Link>
              <Link to="/register" className="btn btn-primary" style={{ fontSize: 14, padding: '8px 16px' }}>
                Join free
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
