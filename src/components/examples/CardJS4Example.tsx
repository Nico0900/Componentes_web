import { useEffect, useRef } from 'react';

export default function CardJS4Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const card = document.createElement('div');
card.className = 'bg-slate-800 border border-slate-700 rounded-lg overflow-hidden max-w-sm';
card.innerHTML = '<div class="h-48 bg-slate-700 flex items-center justify-center"><svg class="w-20 h-20 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><div class="p-4"><h3 class="text-lg font-bold text-white">Product Name</h3><p class="text-slate-400 text-sm mt-1">High quality product description</p><div class="flex items-center justify-between mt-4"><span class="text-2xl font-bold text-white">$99</span><button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Add to Cart</button></div></div>';
document.body.appendChild(card);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const cardjs4Code = `// Vanilla JavaScript
const card = document.createElement('div');
card.className = 'bg-slate-800 border border-slate-700 rounded-lg overflow-hidden max-w-sm';
card.innerHTML = '<div class="h-48 bg-slate-700 flex items-center justify-center"><svg class="w-20 h-20 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><div class="p-4"><h3 class="text-lg font-bold text-white">Product Name</h3><p class="text-slate-400 text-sm mt-1">High quality product description</p><div class="flex items-center justify-between mt-4"><span class="text-2xl font-bold text-white">$99</span><button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Add to Cart</button></div></div>';
document.body.appendChild(card);`;
