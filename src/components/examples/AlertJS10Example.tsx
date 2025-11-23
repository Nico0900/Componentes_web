import { useEffect, useRef } from 'react';

export default function AlertJS10Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'max-w-md';

    const alert = document.createElement('div');
    alert.className = 'bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 backdrop-blur';
    alert.innerHTML = `
      <div class="flex gap-3">
        <div class="bg-cyan-500 p-2 rounded-lg shrink-0">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-cyan-300 mb-1">Information</h4>
          <p class="text-sm text-cyan-200/80">This feature requires authentication. Please log in to continue.</p>
          <button class="mt-3 text-sm font-medium text-cyan-400 hover:text-cyan-300 underline">Sign In</button>
        </div>
      </div>
    `;

    wrapper.appendChild(alert);

    if (containerRef.current) {
      containerRef.current.appendChild(wrapper);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs10Code = `// Vanilla JavaScript + Tailwind
const wrapper = document.createElement('div');
wrapper.className = 'max-w-md';

const alert = document.createElement('div');
alert.className = 'bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 backdrop-blur';
alert.innerHTML = \`
  <div class="flex gap-3">
    <div class="bg-cyan-500 p-2 rounded-lg shrink-0">
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div class="flex-1">
      <h4 class="font-semibold text-cyan-300 mb-1">Information</h4>
      <p class="text-sm text-cyan-200/80">This feature requires authentication. Please log in to continue.</p>
      <button class="mt-3 text-sm font-medium text-cyan-400 hover:text-cyan-300 underline">Sign In</button>
    </div>
  </div>
\`;

wrapper.appendChild(alert);
document.body.appendChild(wrapper);`;
