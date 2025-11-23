import { useEffect, useRef } from 'react';

export default function BadgeJS11Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1 px-2.5 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full';

    const icon = document.createElement('span');
    icon.innerHTML = '✓';
    icon.className = 'text-teal-400 font-bold';

    const text = document.createElement('span');
    text.className = 'text-xs font-medium text-teal-400';
    text.textContent = 'Approved';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs11Code = `import { useEffect, useRef } from 'react';

export default function BadgeJS11Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-1 px-2.5 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full';

    const icon = document.createElement('span');
    icon.innerHTML = '✓';
    icon.className = 'text-teal-400 font-bold';

    const text = document.createElement('span');
    text.className = 'text-xs font-medium text-teal-400';
    text.textContent = 'Approved';

    badge.appendChild(icon);
    badge.appendChild(text);

    if (containerRef.current) {
      containerRef.current.appendChild(badge);
    }
  }, []);

  return <div ref={containerRef}></div>;
}`;
