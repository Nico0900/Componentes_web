import { useEffect, useRef } from 'react';

export default function BadgeJS2Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const badge = document.createElement('span');
badge.className = 'px-3 py-1 border-2 border-green-500 text-green-400 text-sm font-medium rounded-full';
badge.textContent = 'Active';
document.body.appendChild(badge);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs2Code = `// Vanilla JavaScript
const badge = document.createElement('span');
badge.className = 'px-3 py-1 border-2 border-green-500 text-green-400 text-sm font-medium rounded-full';
badge.textContent = 'Active';
document.body.appendChild(badge);`;
