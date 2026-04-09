import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ sortBy: 'relevance', minPrice: '', maxPrice: '', inStockOnly: false });

  const search = useCallback(async () => {
    if (!query) return;
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({ q: query, sortBy: filters.sortBy });
      if (filters.minPrice) params.set('minPrice', filters.minPrice);
      if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
      if (filters.inStockOnly) params.set('inStockOnly', 'true');
      const r = await api.get(`/products/search?${params}`);
      setResults(r.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [query, filters]);

  useEffect(() => { search(); }, [search]);

  if (!query) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
        <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: 8 }}>No search query</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Go back and search for a product.</p>
        <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, marginBottom: 6 }}>
          Results for <span style={{ color: 'var(--accent)' }}>"{query}"</span>
        </h1>
        {results?.platformStatus?.failed?.length > 0 && (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 8 }}>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>⚠ Some platforms unavailable:</span>
            {results.platformStatus.failed.map(f => (
              <span key={f.platform} className="badge badge-red">{f.platform}</span>
            ))}
          </div>
        )}
        {results?.platformStatus?.successful?.length > 0 && (
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 6 }}>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Searched:</span>
            {results.platformStatus.successful.map(p => (
              <span key={p} className="badge badge-green">{p}</span>
            ))}
          </div>
        )}
      </div>

      {/* Filters */}
      <div style={{ marginBottom: 24 }}>
        <FilterBar
          filters={filters}
          onChange={setFilters}
          resultCount={results?.resultCount ?? 0}
        />
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {Array(6).fill(0).map((_, i) => (
            <div key={i} style={{ height: 340, borderRadius: 'var(--radius-lg)' }} className="skeleton" />
          ))}
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>😕</div>
          <p style={{ color: 'var(--red)', marginBottom: 16 }}>{error}</p>
          <button className="btn btn-primary" onClick={search}>Try again</button>
        </div>
      )}

      {/* No results */}
      {!loading && !error && results?.resultCount === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🤷</div>
          <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: 8 }}>No products found</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Try a different search term or clear the filters.</p>
          <button className="btn btn-secondary" onClick={() => setFilters({ sortBy: 'relevance', minPrice: '', maxPrice: '', inStockOnly: false })}>
            Clear filters
          </button>
        </div>
      )}

      {/* Results grid */}
      {!loading && results?.products?.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {results.products.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 50}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
