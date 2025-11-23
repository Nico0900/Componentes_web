import { useEffect, useRef } from 'react';

export default function BadgeJS13Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-violet-600 rounded-md shadow-sm';

    const icon = document.createElement('span');
    icon.innerHTML = '👑';
    icon.className = 'text-sm';

    const text = document.createElement('span');
    text.className = 'text-xs font-bold text-white uppercase';
    text.textContent = 'Premium';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs13Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS13Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-violet-600 rounded-md shadow-sm';

    const icon = document.createElement('span');
    icon.innerHTML = '👑';
    icon.className = 'text-sm';

    const text = document.createElement('span');
    text.className = 'text-xs font-bold text-white uppercase';
    text.textContent = 'Premium';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
