import { useEffect, useRef } from 'react';

export default function AlertJS16Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md relative overflow-hidden bg-gradient-to-br from-pink-900/30 to-rose-900/30 border border-pink-500/30 rounded-2xl p-5 backdrop-blur';
    alert.innerHTML = `
      <div class="absolute top-0 right-0 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"></div>
      <div class="relative flex items-start gap-3">
        <div class="bg-pink-500/20 p-3 rounded-xl">
          <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div>
          <h4 class="font-bold text-pink-300 mb-1">Special Offer!</h4>
          <p class="text-sm text-pink-200/80 mb-3">Get 50% off on your next purchase. Limited time offer!</p>
          <button class="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-lg transition-colors">Claim Offer</button>
        </div>
      </div>
    `;

    if (containerRef.current) {
      containerRef.current.appendChild(alert);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs16Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md relative overflow-hidden bg-gradient-to-br from-pink-900/30 to-rose-900/30 border border-pink-500/30 rounded-2xl p-5 backdrop-blur';
alert.innerHTML = \`
  <div class="absolute top-0 right-0 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"></div>
  <div class="relative flex items-start gap-3">
    <div class="bg-pink-500/20 p-3 rounded-xl">
      <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <div>
      <h4 class="font-bold text-pink-300 mb-1">Special Offer!</h4>
      <p class="text-sm text-pink-200/80 mb-3">Get 50% off on your next purchase. Limited time offer!</p>
      <button class="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-lg transition-colors">Claim Offer</button>
    </div>
  </div>
\`;

document.body.appendChild(alert);`;
