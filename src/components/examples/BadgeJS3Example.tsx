import { useEffect, useRef } from 'react';

export default function BadgeJS3Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const container = document.createElement('div');
container.className = 'relative inline-block';
container.innerHTML = '<button class="p-3 bg-slate-700 text-white rounded-lg"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></button><span class="absolute -top-1 -right-1 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full">5</span>';
document.body.appendChild(container);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs3Code = `// Vanilla JavaScript
const container = document.createElement('div');
container.className = 'relative inline-block';
container.innerHTML = '<button class="p-3 bg-slate-700 text-white rounded-lg"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></button><span class="absolute -top-1 -right-1 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full">5</span>';
document.body.appendChild(container);`;
