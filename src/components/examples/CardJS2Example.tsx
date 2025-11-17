import { useEffect, useRef } from 'react';

export default function CardJS2Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const card = document.createElement('div');
card.className = 'p-6 bg-slate-800 border border-slate-700 rounded-lg max-w-sm';
card.innerHTML = '<div class="flex items-center gap-4"><div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">JD</div><div><h3 class="text-lg font-bold text-white">John Doe</h3><p class="text-slate-400 text-sm">Software Engineer</p></div></div>';
document.body.appendChild(card);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const cardjs2Code = `// Vanilla JavaScript
const card = document.createElement('div');
card.className = 'p-6 bg-slate-800 border border-slate-700 rounded-lg max-w-sm';
card.innerHTML = '<div class="flex items-center gap-4"><div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">JD</div><div><h3 class="text-lg font-bold text-white">John Doe</h3><p class="text-slate-400 text-sm">Software Engineer</p></div></div>';
document.body.appendChild(card);`;
