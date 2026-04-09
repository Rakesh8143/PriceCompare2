import { PRODUCTS, PLATFORM_LISTINGS, generatePriceHistory } from '../data/mockData.js';

// Simulates network latency per platform
const PLATFORM_DELAYS = { amazon: 120, flipkart: 180, croma: 250 };
const PLATFORM_FAILURE_RATE = { amazon: 0.02, flipkart: 0.03, croma: 0.05 };

const PLATFORM_META = {
  amazon: { name: "Amazon", logo: "🛒", color: "#FF9900", url: "https://amazon.in" },
  flipkart: { name: "Flipkart", logo: "📦", color: "#2874F0", url: "https://flipkart.com" },
  croma: { name: "Croma", logo: "🔌", color: "#67B346", url: "https://croma.com" }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchFromPlatform(platform, fn) {
  await sleep(PLATFORM_DELAYS[platform] + Math.random() * 100);
  if (Math.random() < PLATFORM_FAILURE_RATE[platform]) {
    throw new Error(`${platform} API temporarily unavailable`);
  }
  return fn();
}

// Search products on a specific platform
export async function searchPlatform(platform, query) {
  return fetchFromPlatform(platform, () => {
    const listings = PLATFORM_LISTINGS[platform] || [];
    const normalizedQuery = query.toLowerCase().trim();

    const results = listings
      .filter(listing => {
        const product = PRODUCTS.find(p => p.id === listing.productId);
        if (!product) return false;
        return (
          product.name.toLowerCase().includes(normalizedQuery) ||
          product.brand.toLowerCase().includes(normalizedQuery) ||
          product.category.toLowerCase().includes(normalizedQuery) ||
          product.description.toLowerCase().includes(normalizedQuery)
        );
      })
      .map(listing => {
        const product = PRODUCTS.find(p => p.id === listing.productId);
        return {
          ...product,
          platform,
          platformMeta: PLATFORM_META[platform],
          listing: {
            ...listing,
            discount: Math.round(((listing.originalPrice - listing.price) / listing.originalPrice) * 100)
          }
        };
      });

    return { platform, results, timestamp: new Date().toISOString() };
  });
}

// Get product listing from a specific platform
export async function getProductFromPlatform(platform, productId) {
  return fetchFromPlatform(platform, () => {
    const listing = PLATFORM_LISTINGS[platform]?.find(l => l.productId === productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (!listing || !product) return null;

    return {
      ...product,
      platform,
      platformMeta: PLATFORM_META[platform],
      listing: {
        ...listing,
        discount: Math.round(((listing.originalPrice - listing.price) / listing.originalPrice) * 100),
        priceHistory: generatePriceHistory(productId, platform)
      }
    };
  });
}

export const ALL_PLATFORMS = Object.keys(PLATFORM_LISTINGS);
export { PLATFORM_META };
