import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { getPlatformColor, getPlatformName, formatPrice } from '../utils/helpers';

Chart.register(...registerables);

export default function PriceHistoryChart({ priceHistoryByPlatform }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !priceHistoryByPlatform) return;
    if (chartRef.current) chartRef.current.destroy();

    const platforms = Object.keys(priceHistoryByPlatform);
    if (platforms.length === 0) return;

    const labels = priceHistoryByPlatform[platforms[0]]?.map(h => {
      const [year, month] = h.date.split('-');
      return new Date(year, month - 1).toLocaleString('en-IN', { month: 'short', year: '2-digit' });
    }) || [];

    const datasets = platforms.map(platform => ({
      label: getPlatformName(platform),
      data: priceHistoryByPlatform[platform].map(h => h.price),
      borderColor: getPlatformColor(platform),
      backgroundColor: getPlatformColor(platform) + '18',
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: getPlatformColor(platform),
      tension: 0.4,
      fill: false,
    }));

    chartRef.current = new Chart(canvasRef.current, {
      type: 'line',
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#9090a8', font: { family: 'DM Sans', size: 13 }, padding: 20, usePointStyle: true },
          },
          tooltip: {
            backgroundColor: '#1f1f2e',
            borderColor: '#2a2a3a',
            borderWidth: 1,
            titleColor: '#f0f0f8',
            bodyColor: '#9090a8',
            callbacks: {
              label: ctx => ` ${ctx.dataset.label}: ${formatPrice(ctx.raw)}`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: '#1f1f2e' },
            ticks: { color: '#5a5a72', font: { size: 12 } },
          },
          y: {
            grid: { color: '#1f1f2e' },
            ticks: {
              color: '#5a5a72',
              font: { size: 12 },
              callback: v => '₹' + (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v),
            },
          },
        },
        interaction: { intersect: false, mode: 'index' },
      },
    });

    return () => chartRef.current?.destroy();
  }, [priceHistoryByPlatform]);

  return (
    <div style={{ position: 'relative', height: 280 }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
