import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice, getStars, getCategoryIcon, truncate } from '../utils/helpers';

export default function ProductCard({ product, animate = true }) {
  const navigate = useNavigate();
  const topDiscount = product.platformListings
    ? Math.max(...product.platformListings.map(l => l.listing?.discount || 0))
    : product.topDiscount || 0;

  return (
    <div
      className={`card ${animate ? 'animate-fade' : ''}`}
      onClick={() => navigate(`/compare/${product.id}`)}
      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <div style={{
        background: 'var(--bg-elevated)',
        padding: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: 180, position: 'relative', overflow: 'hidden',
      }}>
        {topDiscount > 0 && (
          <div className="badge badge-orange" style={{ position: 'absolute', top: 10, left: 10 }}>
            -{topDiscount}%
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          style={{ height: 140, width: '100%', objectFit: 'contain', transition: 'transform 0.3s' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML += `<span style="font-size:48px">${getCategoryIcon(product.category)}</span>`; }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
            {product.brand}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4, color: 'var(--text-primary)' }}>
            {truncate(product.name, 55)}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span className="stars">{getStars(parseFloat(product.overallRating || 4.2))}</span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{product.overallRating}</span>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 8, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 }}>Best price</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--text-primary)' }}>
              {formatPrice(product.bestPrice)}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
              {product.platformCount || (product.platformListings?.length) || 1} stores
            </div>
            <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: 12 }}
              onClick={e => { e.stopPropagation(); navigate(`/compare/${product.id}`); }}>
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
