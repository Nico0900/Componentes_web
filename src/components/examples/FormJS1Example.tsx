import { useEffect, useRef } from 'react';

export default function FormJS1Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const form = document.createElement('div');
form.className = 'bg-slate-800 border border-slate-700 rounded-lg p-6 max-w-md';
form.innerHTML = '<h2 class="text-2xl font-bold text-white mb-6">Sign In</h2><form><div class="mb-4"><label class="block text-sm font-medium text-slate-300 mb-2">Email</label><input type="email" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" /></div><div class="mb-6"><label class="block text-sm font-medium text-slate-300 mb-2">Password</label><input type="password" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" /></div><button type="submit" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Sign In</button></form>';
document.body.appendChild(form);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const formjs1Code = `// Vanilla JavaScript
const form = document.createElement('div');
form.className = 'bg-slate-800 border border-slate-700 rounded-lg p-6 max-w-md';
form.innerHTML = '<h2 class="text-2xl font-bold text-white mb-6">Sign In</h2><form><div class="mb-4"><label class="block text-sm font-medium text-slate-300 mb-2">Email</label><input type="email" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" /></div><div class="mb-6"><label class="block text-sm font-medium text-slate-300 mb-2">Password</label><input type="password" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" /></div><button type="submit" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Sign In</button></form>';
document.body.appendChild(form);`;
