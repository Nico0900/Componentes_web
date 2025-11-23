import { useEffect, useRef } from 'react';

export default function BadgeJS14Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center px-2.5 py-1 bg-fuchsia-500/20 border-t-2 border-fuchsia-400 rounded-sm';

    const text = document.createElement('span');
    text.className = 'text-xs font-semibold text-fuchsia-300 uppercase';
    text.textContent = 'Featured';

    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs14Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS14Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center px-2.5 py-1 bg-fuchsia-500/20 border-t-2 border-fuchsia-400 rounded-sm';

    const text = document.createElement('span');
    text.className = 'text-xs font-semibold text-fuchsia-300 uppercase';
    text.textContent = 'Featured';

    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
