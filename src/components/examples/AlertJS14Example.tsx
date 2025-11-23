import { useEffect, useRef } from 'react';

export default function AlertJS14Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md bg-slate-800/60 border border-slate-700 rounded-xl p-4 shadow-2xl';
    alert.innerHTML = `
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">!</div>
        <h4 class="font-bold text-violet-300 text-lg">Important Update</h4>
      </div>
      <p class="text-sm text-slate-300 mb-4 pl-13">Please review and accept the new terms of service to continue using the platform.</p>
      <div class="flex gap-2 pl-13">
        <button class="px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium rounded-lg transition-colors">Review Terms</button>
      </div>
    `;

    if (containerRef.current) {
      containerRef.current.appendChild(alert);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs14Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md bg-slate-800/60 border border-slate-700 rounded-xl p-4 shadow-2xl';
alert.innerHTML = \`
  <div class="flex items-center gap-3 mb-3">
    <div class="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">!</div>
    <h4 class="font-bold text-violet-300 text-lg">Important Update</h4>
  </div>
  <p class="text-sm text-slate-300 mb-4 pl-13">Please review and accept the new terms of service to continue using the platform.</p>
  <div class="flex gap-2 pl-13">
    <button class="px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium rounded-lg transition-colors">Review Terms</button>
  </div>
\`;

document.body.appendChild(alert);`;
