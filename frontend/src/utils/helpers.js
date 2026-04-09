export const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

export const formatNumber = (n) =>
  new Intl.NumberFormat('en-IN').format(n);

export const getStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
};

export const getCategoryIcon = (cat) => ({
  smartphones:   '📱',
  laptops:       '💻',
  audio:         '🎧',
  televisions:   '📺',
  appliances:    '🏠',
  wearables:     '⌚',
  sports:        '🏃',
  groceries:     '🛒',
  furniture:     '🛋️',
  personal_care: '🧴',
}[cat] || '📦');

export const getPlatformColor = (platform) => ({
  amazon: '#FF9900',
  flipkart: '#2874F0',
  croma: '#67B346',
}[platform] || '#888');

export const getPlatformName = (platform) => ({
  amazon: 'Amazon',
  flipkart: 'Flipkart',
  croma: 'Croma',
}[platform] || platform);

export const getDealBadge = (score) => {
  if (score >= 70) return { label: 'Best Deal', color: 'var(--green)' };
  if (score >= 50) return { label: 'Good Deal', color: 'var(--blue)' };
  if (score >= 30) return { label: 'Fair Price', color: 'var(--yellow)' };
  return { label: 'Check Price', color: 'var(--text-secondary)' };
};

export const truncate = (str, n) => str?.length > n ? str.slice(0, n) + '…' : str;
