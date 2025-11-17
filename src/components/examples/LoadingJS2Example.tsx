import { useEffect, useRef } from 'react';

export default function LoadingJS2Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const dots = document.createElement('div');
dots.className = 'flex gap-2';
dots.innerHTML = '<div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div><div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div><div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms"></div>';
document.body.appendChild(dots);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const loadingjs2Code = `// Vanilla JavaScript
const dots = document.createElement('div');
dots.className = 'flex gap-2';
dots.innerHTML = '<div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div><div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div><div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms"></div>';
document.body.appendChild(dots);`;
