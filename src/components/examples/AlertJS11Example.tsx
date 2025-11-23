import { useEffect, useRef } from 'react';

export default function AlertJS11Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md bg-amber-500/10 border-2 border-dashed border-amber-500/40 rounded-xl p-5';
    alert.innerHTML = `
      <div class="flex items-start gap-3">
        <svg class="w-6 h-6 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <div>
          <h4 class="font-bold text-amber-300 mb-1">Cookie Policy</h4>
          <p class="text-sm text-amber-200/80 mb-3">We use cookies to improve your experience. By continuing, you accept our cookie policy.</p>
          <div class="flex gap-2">
            <button class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors">Accept</button>
            <button class="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-sm font-medium rounded-lg transition-colors">Decline</button>
          </div>
        </div>
      </div>
    `;

    if (containerRef.current) {
      containerRef.current.appendChild(alert);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs11Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md bg-amber-500/10 border-2 border-dashed border-amber-500/40 rounded-xl p-5';
alert.innerHTML = \`
  <div class="flex items-start gap-3">
    <svg class="w-6 h-6 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
    </svg>
    <div>
      <h4 class="font-bold text-amber-300 mb-1">Cookie Policy</h4>
      <p class="text-sm text-amber-200/80 mb-3">We use cookies to improve your experience. By continuing, you accept our cookie policy.</p>
      <div class="flex gap-2">
        <button class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors">Accept</button>
        <button class="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-sm font-medium rounded-lg transition-colors">Decline</button>
      </div>
    </div>
  </div>
\`;

document.body.appendChild(alert);`;
