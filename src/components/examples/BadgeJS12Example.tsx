import { useEffect, useRef } from 'react';

export default function BadgeJS12Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 rounded-lg';

    const icon = document.createElement('span');
    icon.innerHTML = '❌';
    icon.className = 'text-sm';

    const text = document.createElement('span');
    text.className = 'text-sm font-medium text-rose-400';
    text.textContent = 'Closed';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs12Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS12Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 rounded-lg';

    const icon = document.createElement('span');
    icon.innerHTML = '❌';
    icon.className = 'text-sm';

    const text = document.createElement('span');
    text.className = 'text-sm font-medium text-rose-400';
    text.textContent = 'Closed';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
