import { useEffect, useRef } from 'react';

export default function BadgeJS7Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full';

    const dot = document.createElement('span');
    dot.className = 'w-2 h-2 bg-amber-400 rounded-full';

    const text = document.createElement('span');
    text.className = 'text-sm font-medium text-amber-400';
    text.textContent = 'Away';

    badge.appendChild(dot);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs7Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS7Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full';

    const dot = document.createElement('span');
    dot.className = 'w-2 h-2 bg-amber-400 rounded-full';

    const text = document.createElement('span');
    text.className = 'text-sm font-medium text-amber-400';
    text.textContent = 'Away';

    badge.appendChild(dot);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
