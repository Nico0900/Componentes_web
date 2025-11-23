import { useEffect, useRef } from 'react';

export default function BadgeJS10Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md';

    const icon = document.createElement('span');
    icon.innerHTML = '🏆';
    icon.className = 'text-base';

    const text = document.createElement('span');
    text.className = 'text-xs font-bold text-white';
    text.textContent = 'Top Contributor';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs10Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS10Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md';

    const icon = document.createElement('span');
    icon.innerHTML = '🏆';
    icon.className = 'text-base';

    const text = document.createElement('span');
    text.className = 'text-xs font-bold text-white';
    text.textContent = 'Top Contributor';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
