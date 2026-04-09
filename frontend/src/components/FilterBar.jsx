import React from 'react';

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'discount', label: 'Best Discount' },
];

export default function FilterBar({ filters, onChange, resultCount }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
      padding: '14px 20px', background: 'var(--bg-card)',
      borderRadius: 'var(--radius-md)', border: '1px solid var(--border)',
    }}>
      <span style={{ color: 'var(--text-muted)', fontSize: 13, marginRight: 4 }}>
        {resultCount} result{resultCount !== 1 ? 's' : ''}
      </span>

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {/* Sort */}
        <select
          className="input"
          value={filters.sortBy}
          onChange={e => onChange({ ...filters, sortBy: e.target.value })}
          style={{ width: 'auto', height: 36, fontSize: 13 }}
        >
          {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        {/* Min price */}
        <input
          className="input"
          type="number"
          placeholder="Min ₹"
          value={filters.minPrice}
          onChange={e => onChange({ ...filters, minPrice: e.target.value })}
          style={{ width: 100, height: 36, fontSize: 13 }}
        />

        {/* Max price */}
        <input
          className="input"
          type="number"
          placeholder="Max ₹"
          value={filters.maxPrice}
          onChange={e => onChange({ ...filters, maxPrice: e.target.value })}
          style={{ width: 100, height: 36, fontSize: 13 }}
        />

        {/* In stock only */}
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 13, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={e => onChange({ ...filters, inStockOnly: e.target.checked })}
            style={{ accentColor: 'var(--accent)', width: 15, height: 15 }}
          />
          In stock only
        </label>
      </div>
    </div>
  );
}
