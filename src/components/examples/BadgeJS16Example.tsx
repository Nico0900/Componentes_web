import { useEffect, useRef } from 'react';

export default function BadgeJS16Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1 px-2.5 py-1 bg-orange-500/10 border-l-4 border-orange-500 rounded-r';

    const icon = document.createElement('span');
    icon.innerHTML = '⚠️';
    icon.className = 'text-sm';

    const text = document.createElement('span');
    text.className = 'text-xs font-semibold text-orange-400';
    text.textContent = 'Warning';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs16Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS16Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1 px-2.5 py-1 bg-orange-500/10 border-l-4 border-orange-500 rounded-r';

    const icon = document.createElement('span');
    icon.innerHTML = '⚠️';
    icon.className = 'text-sm';

    const text = document.createElement('span');
    text.className = 'text-xs font-semibold text-orange-400';
    text.textContent = 'Warning';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
