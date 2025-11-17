import { useEffect, useRef } from 'react';

export default function BadgeJS1Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const badge = document.createElement('span');
badge.className = 'px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full';
badge.textContent = 'New';
document.body.appendChild(badge);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const badgejs1Code = `// Vanilla JavaScript
const badge = document.createElement('span');
badge.className = 'px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full';
badge.textContent = 'New';
document.body.appendChild(badge);`;
