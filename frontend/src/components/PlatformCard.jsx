import React from 'react';
import { formatPrice, formatNumber, getStars, getPlatformColor, getPlatformName, getDealBadge } from '../utils/helpers';

export default function PlatformCard({ item, rank }) {
  const { platform, platformMeta, listing, dealScore, isBestDeal } = item;
  const color = getPlatformColor(platform);
  const badge = getDealBadge(dealScore);

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: `1.5px solid ${isBestDeal ? 'var(--green)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      position: 'relative',
      transition: 'all var(--transition)',
      boxShadow: isBestDeal ? '0 0 24px rgba(34,217,138,0.1)' : 'none',
    }}>
      {isBestDeal && (
        <div style={{
          position: 'absolute', top: -12, left: 20,
          background: 'var(--green)', color: '#000',
          padding: '3px 12px', borderRadius: 100,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
        }}>
          ✓ BEST DEAL
        </div>
      )}

      {/* Platform header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: color + '18', border: `1px solid ${color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18,
          }}>
            {platformMeta?.logo || '🛒'}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: 15, color }}>
              {platformMeta?.name || getPlatformName(platform)}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>by {listing.seller}</div>
          </div>
        </div>
        <div style={{
          fontSize: 11, fontWeight: 700,
          color: badge.color, background: badge.color + '18',
          padding: '4px 10px', borderRadius: 100,
        }}>
          {badge.label}
        </div>
      </div>

      {/* Price row */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, marginBottom: 14 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--text-primary)' }}>
          {formatPrice(listing.price)}
        </div>
        {listing.discount > 0 && (
          <>
            <div style={{ fontSize: 14, color: 'var(--text-muted)', textDecoration: 'line-through', paddingBottom: 4 }}>
              {formatPrice(listing.originalPrice)}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)', paddingBottom: 4 }}>
              -{listing.discount}%
            </div>
          </>
        )}
      </div>

      {/* Meta info */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
        {[
          { label: 'Rating', value: `${getStars(listing.rating)} ${listing.rating}` },
          { label: 'Reviews', value: formatNumber(listing.reviews) },
          { label: 'Delivery', value: `${listing.deliveryDays}d` },
        ].map(m => (
          <div key={m.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 }}>{m.label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{m.value}</div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
        <span className={`badge ${listing.inStock ? 'badge-green' : 'badge-red'}`}>
          {listing.inStock ? '● In Stock' : '○ Out of Stock'}
        </span>
        {listing.emi && <span className="badge badge-blue">EMI Available</span>}
      </div>

      {/* Deal score bar */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-muted)', marginBottom: 5 }}>
          <span>Deal Score</span>
          <span style={{ color: badge.color, fontWeight: 700 }}>{dealScore}/100</span>
        </div>
        <div style={{ height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: `${dealScore}%`,
            background: `linear-gradient(90deg, ${badge.color}, ${badge.color}aa)`,
            borderRadius: 2, transition: 'width 0.8s ease',
          }} />
        </div>
      </div>

      <a
        href={platformMeta?.url || '#'}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => !platformMeta?.url && e.preventDefault()}
        className="btn btn-primary"
        style={{
          width: '100%',
          background: listing.inStock ? color : 'var(--bg-elevated)',
          color: listing.inStock ? 'white' : 'var(--text-muted)',
          fontSize: 13,
        }}
      >
        {listing.inStock ? `Buy on ${platformMeta?.name || platform}` : 'Currently Unavailable'}
        {listing.inStock && ' →'}
      </a>
    </div>
  );
}
