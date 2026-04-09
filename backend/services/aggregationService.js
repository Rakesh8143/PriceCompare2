import { searchPlatform, getProductFromPlatform, ALL_PLATFORMS } from './platformService.js';
import { PRODUCTS } from '../data/mockData.js';

// Fetch from all platforms in parallel, handle partial failures gracefully
async function fetchAllPlatforms(fetchFn) {
  const results = await Promise.allSettled(
    ALL_PLATFORMS.map(platform => fetchFn(platform))
  );

  const successful = [];
  const failed = [];

  results.forEach((result, i) => {
    if (result.status === 'fulfilled' && result.value) {
      successful.push(result.value);
    } else {
      failed.push({ platform: ALL_PLATFORMS[i], error: result.reason?.message || 'Unknown error' });
    }
  });

  return { successful, failed };
}

// Deal scoring algorithm:
// Score = 40% price rank + 30% discount % + 20% rating + 10% delivery speed
function scoreDeals(platformListings) {
  if (platformListings.length === 0) return [];

  const prices = platformListings.map(l => l.listing.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 1;

  const maxDelivery = Math.max(...platformListings.map(l => l.listing.deliveryDays));

  return platformListings.map(item => {
    const priceScore = ((maxPrice - item.listing.price) / priceRange) * 40;
    const discountScore = (item.listing.discount / 100) * 30;
    const ratingScore = ((item.listing.rating - 3) / 2) * 20; // normalize 3-5 → 0-20
    const deliveryScore = ((maxDelivery - item.listing.deliveryDays) / (maxDelivery || 1)) * 10;
    const availabilityBonus = item.listing.inStock ? 5 : -15;

    const totalScore = priceScore + discountScore + ratingScore + deliveryScore + availabilityBonus;

    return {
      ...item,
      dealScore: Math.round(Math.max(0, Math.min(100, totalScore))),
      isBestDeal: false // will be set after sorting
    };
  });
}

// Search across all platforms
export async function aggregateSearch(query) {
  const { successful, failed } = await fetchAllPlatforms(p => searchPlatform(p, query));

  // Collect all unique products found across platforms
  const productMap = new Map();

  successful.forEach(({ results }) => {
    results.forEach(item => {
      if (!productMap.has(item.id)) {
        productMap.set(item.id, { product: item, platformListings: [] });
      }
      productMap.get(item.id).platformListings.push({
        platform: item.platform,
        platformMeta: item.platformMeta,
        listing: item.listing
      });
    });
  });

  // For each product, score and rank listings
  const aggregated = Array.from(productMap.values()).map(({ product, platformListings }) => {
    const scored = scoreDeals(platformListings);
    scored.sort((a, b) => b.dealScore - a.dealScore);
    if (scored.length > 0) scored[0].isBestDeal = true;

    const availableListings = scored.filter(l => l.listing.inStock);
    const bestPrice = availableListings.length > 0
      ? Math.min(...availableListings.map(l => l.listing.price))
      : Math.min(...scored.map(l => l.listing.price));

    return {
      id: product.id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      image: product.image,
      description: product.description,
      specs: product.specs,
      bestPrice,
      platformCount: platformListings.length,
      platformListings: scored,
      overallRating: (scored.reduce((sum, l) => sum + l.listing.rating, 0) / scored.length).toFixed(1)
    };
  });

  return {
    query,
    resultCount: aggregated.length,
    products: aggregated,
    platformStatus: {
      successful: successful.map(s => s.platform),
      failed
    },
    timestamp: new Date().toISOString()
  };
}

// Get full comparison for a single product
export async function aggregateProductComparison(productId) {
  const baseProduct = PRODUCTS.find(p => p.id === productId);
  if (!baseProduct) return null;

  const { successful, failed } = await fetchAllPlatforms(p => getProductFromPlatform(p, productId));

  const platformListings = successful
    .filter(Boolean)
    .map(item => ({
      platform: item.platform,
      platformMeta: item.platformMeta,
      listing: item.listing
    }));

  const scored = scoreDeals(platformListings);
  scored.sort((a, b) => b.dealScore - a.dealScore);
  if (scored.length > 0) scored[0].isBestDeal = true;

  // Merge price history from all platforms for chart display
  const priceHistoryByPlatform = {};
  scored.forEach(item => {
    priceHistoryByPlatform[item.platform] = item.listing.priceHistory;
  });

  return {
    ...baseProduct,
    platformListings: scored,
    priceHistoryByPlatform,
    bestPrice: scored.filter(l => l.listing.inStock).length > 0
      ? Math.min(...scored.filter(l => l.listing.inStock).map(l => l.listing.price))
      : Math.min(...scored.map(l => l.listing.price)),
    platformStatus: { failed },
    timestamp: new Date().toISOString()
  };
}

// Get all categories with product counts
export async function getCategories() {
  const { PRODUCTS } = await import('../data/mockData.js');
  const categories = {};
  PRODUCTS.forEach(p => {
    categories[p.category] = (categories[p.category] || 0) + 1;
  });
  return Object.entries(categories).map(([name, count]) => ({ name, count }));
}

// Get trending / featured products
export async function getFeaturedProducts() {
  const { successful } = await fetchAllPlatforms(p => searchPlatform(p, ''));
  
  const productMap = new Map();
  successful.forEach(({ results }) => {
    results.forEach(item => {
      if (!productMap.has(item.id)) {
        productMap.set(item.id, { product: item, platformListings: [] });
      }
      productMap.get(item.id).platformListings.push({
        platform: item.platform,
        platformMeta: item.platformMeta,
        listing: item.listing
      });
    });
  });

  return Array.from(productMap.values())
    .slice(0, 8)
    .map(({ product, platformListings }) => {
      const scored = scoreDeals(platformListings);
      const bestPrice = Math.min(...scored.map(l => l.listing.price));
      return {
        id: product.id,
        name: product.name,
        brand: product.brand,
        category: product.category,
        image: product.image,
        bestPrice,
        platformCount: platformListings.length,
        overallRating: (scored.reduce((sum, l) => sum + l.listing.rating, 0) / scored.length).toFixed(1),
        topDiscount: Math.max(...scored.map(l => l.listing.discount))
      };
    });
}
