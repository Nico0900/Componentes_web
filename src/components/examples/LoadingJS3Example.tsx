import { useEffect, useRef } from 'react';

export default function LoadingJS3Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const progress = document.createElement('div');
progress.className = 'w-full max-w-md';
progress.innerHTML = '<div class="flex justify-between text-sm text-slate-400 mb-2"><span>Uploading...</span><span>65%</span></div><div class="w-full bg-slate-700 rounded-full h-2 overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300" style="width: 65%"></div></div>';
document.body.appendChild(progress);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const loadingjs3Code = `// Vanilla JavaScript
const progress = document.createElement('div');
progress.className = 'w-full max-w-md';
progress.innerHTML = '<div class="flex justify-between text-sm text-slate-400 mb-2"><span>Uploading...</span><span>65%</span></div><div class="w-full bg-slate-700 rounded-full h-2 overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300" style="width: 65%"></div></div>';
document.body.appendChild(progress);`;
