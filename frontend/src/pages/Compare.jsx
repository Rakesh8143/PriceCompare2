import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import PlatformCard from '../components/PlatformCard';
import PriceHistoryChart from '../components/PriceHistoryChart';
import { formatPrice, getCategoryIcon, getStars, formatNumber } from '../utils/helpers';

export default function Compare() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    api.get(`/products/${id}/compare`)
      .then(r => setProduct(r.data))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ height: 300, borderRadius: 'var(--radius-lg)', marginBottom: 24 }} className="skeleton" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {[1,2,3].map(i => <div key={i} style={{ height: 340, borderRadius: 'var(--radius-lg)' }} className="skeleton" />)}
      </div>
    </div>
  );

  if (error) return (
    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>😕</div>
      <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: 8 }}>Failed to load</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>{error}</p>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );

  if (!product) return null;

  const best = product.platformListings?.find(l => l.isBestDeal);
  const savings = best && product.platformListings?.length > 1
    ? Math.max(...product.platformListings.map(l => l.listing.price)) - best.listing.price
    : 0;

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 60px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: 'var(--text-muted)' }}>
        <button className="btn btn-ghost" style={{ padding: '4px 0', fontSize: 13 }} onClick={() => navigate(-1)}>← Back</button>
        <span>/</span>
        <span>{getCategoryIcon(product.category)} {product.category}</span>
        <span>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>{product.brand}</span>
      </div>

      {/* Product hero */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 32, marginBottom: 40,
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
      }}>
        {/* Image */}
        <div style={{
          background: 'var(--bg-elevated)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          padding: 40, minHeight: 280,
        }}>
          <img src={product.image} alt={product.name}
            style={{ maxHeight: 260, maxWidth: '100%', objectFit: 'contain' }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Info */}
        <div style={{ padding: '36px 36px 36px 0' }}>
          <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {product.brand}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, marginBottom: 12, lineHeight: 1.25 }}>
            {product.name}
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
            {product.description}
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 28, marginBottom: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 3 }}>BEST PRICE</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--text-primary)' }}>
                {formatPrice(product.bestPrice)}
              </div>
            </div>
            {savings > 0 && (
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 3 }}>MAX SAVINGS</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--green)' }}>
                  {formatPrice(savings)}
                </div>
              </div>
            )}
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 3 }}>STORES</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32 }}>
                {product.platformListings?.length}
              </div>
            </div>
          </div>

          {/* Specs */}
          {product.specs && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} style={{
                  background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                  borderRadius: 8, padding: '5px 12px', fontSize: 12,
                }}>
                  <span style={{ color: 'var(--text-muted)', textTransform: 'capitalize' }}>{k}: </span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          )}

          {/* Platform failures warning */}
          {product.platformStatus?.failed?.length > 0 && (
            <div style={{ marginTop: 16, padding: '8px 14px', background: 'rgba(255,196,71,0.08)', border: '1px solid rgba(255,196,71,0.2)', borderRadius: 8, fontSize: 12, color: 'var(--yellow)' }}>
              ⚠ {product.platformStatus.failed.map(f => f.platform).join(', ')} temporarily unavailable
            </div>
          )}
        </div>
      </div>

      {/* Platform comparison */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 20 }}>
          🏪 Price Comparison across Stores
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {product.platformListings?.map((item, i) => (
            <div key={item.platform} style={{ animationDelay: `${i * 100}ms` }} className="animate-fade">
              <PlatformCard item={item} rank={i + 1} />
            </div>
          ))}
        </div>
      </div>

      {/* Price history chart */}
      {product.priceHistoryByPlatform && Object.keys(product.priceHistoryByPlatform).length > 0 && (
        <div className="card" style={{ padding: 24, marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 6 }}>
            📈 Price History (12 months)
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>
            Historical pricing across all platforms to help you decide when to buy.
          </p>
          <PriceHistoryChart priceHistoryByPlatform={product.priceHistoryByPlatform} />
        </div>
      )}

      {/* Spec comparison table */}
      {product.specs && Object.keys(product.specs).length > 0 && (
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700 }}>📋 Specifications</h2>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {Object.entries(product.specs).map(([key, value], i) => (
                <tr key={key} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                  <td style={{ padding: '12px 24px', color: 'var(--text-muted)', fontSize: 13, width: '35%', textTransform: 'capitalize', borderBottom: '1px solid var(--border)' }}>{key}</td>
                  <td style={{ padding: '12px 24px', color: 'var(--text-primary)', fontSize: 14, fontWeight: 500, borderBottom: '1px solid var(--border)' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
