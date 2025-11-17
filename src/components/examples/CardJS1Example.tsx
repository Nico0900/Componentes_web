import { useEffect, useRef } from 'react';

export default function CardJS1Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const card = document.createElement('div');
card.className = 'p-6 bg-slate-800 border border-slate-700 rounded-lg max-w-sm';
card.innerHTML = '<h3 class="text-xl font-bold text-white mb-2">Card Title</h3><p class="text-slate-400">This is a simple card with some content inside.</p>';
document.body.appendChild(card);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const cardjs1Code = `// Vanilla JavaScript
const card = document.createElement('div');
card.className = 'p-6 bg-slate-800 border border-slate-700 rounded-lg max-w-sm';
card.innerHTML = '<h3 class="text-xl font-bold text-white mb-2">Card Title</h3><p class="text-slate-400">This is a simple card with some content inside.</p>';
document.body.appendChild(card);`;
