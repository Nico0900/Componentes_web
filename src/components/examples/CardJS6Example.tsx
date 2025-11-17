import { useEffect, useRef } from 'react';

export default function CardJS6Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const card = document.createElement('div');
card.className = 'bg-slate-800 border border-slate-700 rounded-lg overflow-hidden max-w-md';
card.innerHTML = '<div class="h-40 bg-gradient-to-r from-purple-600 to-pink-600"></div><div class="p-6"><div class="flex gap-2 mb-3"><span class="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">JavaScript</span><span class="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">Tutorial</span></div><h3 class="text-xl font-bold text-white mb-2">How to Build Amazing Web Components</h3><p class="text-slate-400 text-sm mb-4">Learn the basics of creating reusable web components with vanilla JavaScript...</p><div class="flex items-center gap-3 text-sm text-slate-500"><span>5 min read</span><span>•</span><span>Jan 15, 2024</span></div></div>';
document.body.appendChild(card);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const cardjs6Code = `// Vanilla JavaScript
const card = document.createElement('div');
card.className = 'bg-slate-800 border border-slate-700 rounded-lg overflow-hidden max-w-md';
card.innerHTML = '<div class="h-40 bg-gradient-to-r from-purple-600 to-pink-600"></div><div class="p-6"><div class="flex gap-2 mb-3"><span class="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">JavaScript</span><span class="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">Tutorial</span></div><h3 class="text-xl font-bold text-white mb-2">How to Build Amazing Web Components</h3><p class="text-slate-400 text-sm mb-4">Learn the basics of creating reusable web components with vanilla JavaScript...</p><div class="flex items-center gap-3 text-sm text-slate-500"><span>5 min read</span><span>•</span><span>Jan 15, 2024</span></div></div>';
document.body.appendChild(card);`;
