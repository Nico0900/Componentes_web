import { useEffect, useRef } from 'react';

export default function FormJS3Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const form = document.createElement('div');
form.className = 'bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 max-w-md';
form.innerHTML = '<h2 class="text-2xl font-bold text-white mb-2">Subscribe to Newsletter</h2><p class="text-purple-100 text-sm mb-6">Get the latest updates and news delivered to your inbox.</p><form class="flex gap-2"><input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" /><button type="submit" class="px-6 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors">Subscribe</button></form>';
document.body.appendChild(form);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const formjs3Code = `// Vanilla JavaScript
const form = document.createElement('div');
form.className = 'bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 max-w-md';
form.innerHTML = '<h2 class="text-2xl font-bold text-white mb-2">Subscribe to Newsletter</h2><p class="text-purple-100 text-sm mb-6">Get the latest updates and news delivered to your inbox.</p><form class="flex gap-2"><input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" /><button type="submit" class="px-6 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors">Subscribe</button></form>';
document.body.appendChild(form);`;
