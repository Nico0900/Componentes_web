import { useEffect, useRef } from 'react';

export default function CardJS5Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const card = document.createElement('div');
card.className = 'p-4 bg-slate-800 border-l-4 border-yellow-500 rounded-lg max-w-md flex gap-3';
card.innerHTML = '<svg class="w-6 h-6 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><div><h4 class="text-white font-semibold">Warning</h4><p class="text-slate-400 text-sm mt-1">This action cannot be undone. Please proceed with caution.</p></div>';
document.body.appendChild(card);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const cardjs5Code = `// Vanilla JavaScript
const card = document.createElement('div');
card.className = 'p-4 bg-slate-800 border-l-4 border-yellow-500 rounded-lg max-w-md flex gap-3';
card.innerHTML = '<svg class="w-6 h-6 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><div><h4 class="text-white font-semibold">Warning</h4><p class="text-slate-400 text-sm mt-1">This action cannot be undone. Please proceed with caution.</p></div>';
document.body.appendChild(card);`;
