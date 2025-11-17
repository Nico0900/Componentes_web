import { useEffect, useRef } from 'react';

export default function AlertJS6Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const alert = document.createElement('div');
alert.className = 'p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg max-w-md';
alert.innerHTML = '<div class="flex items-start gap-3 mb-3"><svg class="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg><div><p class="text-purple-400 font-semibold">New Update Available</p><p class="text-purple-300 text-sm mt-1">Version 2.0 is ready to install.</p></div></div><button class="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">Update Now</button>';
document.body.appendChild(alert);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs6Code = `// Vanilla JavaScript
const alert = document.createElement('div');
alert.className = 'p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg max-w-md';
alert.innerHTML = '<div class="flex items-start gap-3 mb-3"><svg class="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg><div><p class="text-purple-400 font-semibold">New Update Available</p><p class="text-purple-300 text-sm mt-1">Version 2.0 is ready to install.</p></div></div><button class="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">Update Now</button>';
document.body.appendChild(alert);`;
