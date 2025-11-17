import { useEffect, useRef } from 'react';

export default function TableJS2Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const table = document.createElement('div');
table.className = 'border border-slate-700 rounded-lg overflow-hidden';
table.innerHTML = '<table class="w-full"><thead class="bg-slate-800"><tr><th class="px-4 py-3 text-left text-slate-300 font-semibold">Product</th><th class="px-4 py-3 text-left text-slate-300 font-semibold">Price</th><th class="px-4 py-3 text-left text-slate-300 font-semibold">Stock</th></tr></thead><tbody><tr class="bg-slate-900 border-t border-slate-700"><td class="px-4 py-3 text-white">Laptop</td><td class="px-4 py-3 text-slate-400">$999</td><td class="px-4 py-3 text-green-400">In Stock</td></tr><tr class="bg-slate-800 border-t border-slate-700"><td class="px-4 py-3 text-white">Mouse</td><td class="px-4 py-3 text-slate-400">$29</td><td class="px-4 py-3 text-green-400">In Stock</td></tr><tr class="bg-slate-900 border-t border-slate-700"><td class="px-4 py-3 text-white">Keyboard</td><td class="px-4 py-3 text-slate-400">$79</td><td class="px-4 py-3 text-red-400">Out of Stock</td></tr></tbody></table>';
document.body.appendChild(table);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const tablejs2Code = `// Vanilla JavaScript
const table = document.createElement('div');
table.className = 'border border-slate-700 rounded-lg overflow-hidden';
table.innerHTML = '<table class="w-full"><thead class="bg-slate-800"><tr><th class="px-4 py-3 text-left text-slate-300 font-semibold">Product</th><th class="px-4 py-3 text-left text-slate-300 font-semibold">Price</th><th class="px-4 py-3 text-left text-slate-300 font-semibold">Stock</th></tr></thead><tbody><tr class="bg-slate-900 border-t border-slate-700"><td class="px-4 py-3 text-white">Laptop</td><td class="px-4 py-3 text-slate-400">$999</td><td class="px-4 py-3 text-green-400">In Stock</td></tr><tr class="bg-slate-800 border-t border-slate-700"><td class="px-4 py-3 text-white">Mouse</td><td class="px-4 py-3 text-slate-400">$29</td><td class="px-4 py-3 text-green-400">In Stock</td></tr><tr class="bg-slate-900 border-t border-slate-700"><td class="px-4 py-3 text-white">Keyboard</td><td class="px-4 py-3 text-slate-400">$79</td><td class="px-4 py-3 text-red-400">Out of Stock</td></tr></tbody></table>';
document.body.appendChild(table);`;
