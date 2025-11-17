import { useEffect, useRef } from 'react';

export default function InputJS1Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const container = document.createElement('div');
container.className = 'max-w-md';
container.innerHTML = '<label class="block text-sm font-medium text-slate-300 mb-2">Email Address</label><input type="email" placeholder="Enter your email" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />';
document.body.appendChild(container);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const inputjs1Code = `// Vanilla JavaScript
const container = document.createElement('div');
container.className = 'max-w-md';
container.innerHTML = '<label class="block text-sm font-medium text-slate-300 mb-2">Email Address</label><input type="email" placeholder="Enter your email" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />';
document.body.appendChild(container);`;
