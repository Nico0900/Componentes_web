import { useEffect, useRef } from 'react';

export default function TableJS1Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const table = document.createElement('div');
table.className = 'border border-slate-700 rounded-lg overflow-hidden';
table.innerHTML = '<table class="w-full"><thead class="bg-slate-800"><tr><th class="px-4 py-3 text-left text-slate-300 font-semibold">Name</th><th class="px-4 py-3 text-left text-slate-300 font-semibold">Email</th><th class="px-4 py-3 text-left text-slate-300 font-semibold">Role</th></tr></thead><tbody class="bg-slate-900"><tr class="border-t border-slate-700"><td class="px-4 py-3 text-white">John Doe</td><td class="px-4 py-3 text-slate-400">john@example.com</td><td class="px-4 py-3 text-slate-400">Admin</td></tr><tr class="border-t border-slate-700"><td class="px-4 py-3 text-white">Jane Smith</td><td class="px-4 py-3 text-slate-400">jane@example.com</td><td class="px-4 py-3 text-slate-400">User</td></tr></tbody></table>';
document.body.appendChild(table);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const tablejs1Code = `// Vanilla JavaScript
const table = document.createElement('div');
table.className = 'border border-slate-700 rounded-lg overflow-hidden';
table.innerHTML = '<table class="w-full"><thead class="bg-slate-800"><tr><th class="px-4 py-3 text-left text-slate-300 font-semibold">Name</th><th class="px-4 py-3 text-left text-slate-300 font-semibold">Email</th><th class="px-4 py-3 text-left text-slate-300 font-semibold">Role</th></tr></thead><tbody class="bg-slate-900"><tr class="border-t border-slate-700"><td class="px-4 py-3 text-white">John Doe</td><td class="px-4 py-3 text-slate-400">john@example.com</td><td class="px-4 py-3 text-slate-400">Admin</td></tr><tr class="border-t border-slate-700"><td class="px-4 py-3 text-white">Jane Smith</td><td class="px-4 py-3 text-slate-400">jane@example.com</td><td class="px-4 py-3 text-slate-400">User</td></tr></tbody></table>';
document.body.appendChild(table);`;
