import { Router } from 'express';
import { aggregateSearch, aggregateProductComparison, getCategories, getFeaturedProducts } from '../services/aggregationService.js';
import { PRODUCTS } from '../data/mockData.js';

const router = Router();

// GET /api/products/search?q=iphone&category=smartphones&minPrice=10000&maxPrice=200000&sortBy=price
router.get('/search', async (req, res) => {
  try {
    const { q = '', category, minPrice, maxPrice, sortBy = 'relevance', inStockOnly } = req.query;
    if (!q.trim() && !category) {
      return res.status(400).json({ error: 'Search query or category is required' });
    }

    const searchQuery = q || category || '';
    const result = await aggregateSearch(searchQuery);

    // Apply filters
    let products = result.products;

    if (category) {
      products = products.filter(p => p.category === category);
    }
    if (minPrice) {
      products = products.filter(p => p.bestPrice >= parseInt(minPrice));
    }
    if (maxPrice) {
      products = products.filter(p => p.bestPrice <= parseInt(maxPrice));
    }
    if (inStockOnly === 'true') {
      products = products.filter(p =>
        p.platformListings.some(l => l.listing.inStock)
      );
    }

    // Sort
    if (sortBy === 'price_asc') products.sort((a, b) => a.bestPrice - b.bestPrice);
    else if (sortBy === 'price_desc') products.sort((a, b) => b.bestPrice - a.bestPrice);
    else if (sortBy === 'rating') products.sort((a, b) => b.overallRating - a.overallRating);
    else if (sortBy === 'discount') {
      products.sort((a, b) => {
        const aDisc = Math.max(...a.platformListings.map(l => l.listing.discount));
        const bDisc = Math.max(...b.platformListings.map(l => l.listing.discount));
        return bDisc - aDisc;
      });
    }

    res.json({ ...result, products, resultCount: products.length });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: 'Search failed. Please try again.' });
  }
});

// GET /api/products/featured
router.get('/featured', async (req, res) => {
  try {
    const products = await getFeaturedProducts();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch featured products' });
  }
});

// GET /api/products/categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await getCategories();
    res.json({ categories });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// GET /api/products/:id/compare
router.get('/:id/compare', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await aggregateProductComparison(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('Compare error:', err);
    res.status(500).json({ error: 'Comparison failed. Please try again.' });
  }
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const product = PRODUCTS.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

export default router;
