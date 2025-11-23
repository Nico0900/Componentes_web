import { useEffect, useRef } from 'react';

export default function BadgeJS15Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 bg-lime-500/10 border border-lime-500/30 rounded-full';

    const icon = document.createElement('span');
    icon.innerHTML = '🎯';
    icon.className = 'text-sm';

    const text = document.createElement('span');
    text.className = 'text-sm font-medium text-lime-400';
    text.textContent = 'In Progress';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs15Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS15Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 bg-lime-500/10 border border-lime-500/30 rounded-full';

    const icon = document.createElement('span');
    icon.innerHTML = '🎯';
    icon.className = 'text-sm';

    const text = document.createElement('span');
    text.className = 'text-sm font-medium text-lime-400';
    text.textContent = 'In Progress';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
