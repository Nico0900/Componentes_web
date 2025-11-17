import { useEffect, useRef } from 'react';

export default function CardJS3Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const card = document.createElement('div');
card.className = 'p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg max-w-sm text-white';
card.innerHTML = '<div class="flex justify-between items-start"><div><p class="text-blue-200 text-sm">Total Users</p><h3 class="text-3xl font-bold mt-2">2,543</h3></div><svg class="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><p class="text-green-300 text-sm mt-4">↑ 12% from last month</p>';
document.body.appendChild(card);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const cardjs3Code = `// Vanilla JavaScript
const card = document.createElement('div');
card.className = 'p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg max-w-sm text-white';
card.innerHTML = '<div class="flex justify-between items-start"><div><p class="text-blue-200 text-sm">Total Users</p><h3 class="text-3xl font-bold mt-2">2,543</h3></div><svg class="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><p class="text-green-300 text-sm mt-4">↑ 12% from last month</p>';
document.body.appendChild(card);`;
