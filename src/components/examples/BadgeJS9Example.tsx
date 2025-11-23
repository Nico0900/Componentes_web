import { useEffect, useRef } from 'react';

export default function BadgeJS9Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center px-2.5 py-0.5 bg-slate-700 border border-slate-600 rounded-md';

    const text = document.createElement('span');
    text.className = 'text-xs text-slate-300';
    text.textContent = 'v2.1.0';

    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs9Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS9Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center px-2.5 py-0.5 bg-slate-700 border border-slate-600 rounded-md';

    const text = document.createElement('span');
    text.className = 'text-xs text-slate-300';
    text.textContent = 'v2.1.0';

    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
