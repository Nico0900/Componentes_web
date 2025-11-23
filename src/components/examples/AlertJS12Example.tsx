import { useEffect, useRef } from 'react';

export default function AlertJS12Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-5 backdrop-blur-sm shadow-lg';
    alert.innerHTML = `
      <div class="flex items-center gap-4">
        <div class="bg-blue-500/20 p-3 rounded-full">
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h4 class="font-bold text-blue-300 mb-1">Account Verified</h4>
          <p class="text-sm text-blue-200/80">Your account has been successfully verified!</p>
        </div>
        <span class="text-xs text-blue-400/70">2m ago</span>
      </div>
    `;

    if (containerRef.current) {
      containerRef.current.appendChild(alert);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs12Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-5 backdrop-blur-sm shadow-lg';
alert.innerHTML = \`
  <div class="flex items-center gap-4">
    <div class="bg-blue-500/20 p-3 rounded-full">
      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div class="flex-1">
      <h4 class="font-bold text-blue-300 mb-1">Account Verified</h4>
      <p class="text-sm text-blue-200/80">Your account has been successfully verified!</p>
    </div>
    <span class="text-xs text-blue-400/70">2m ago</span>
  </div>
\`;

document.body.appendChild(alert);`;
