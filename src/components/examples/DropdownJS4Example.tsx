import { useEffect, useRef } from 'react';

export default function DropdownJS4Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: inline-flex; border-radius: 8px; overflow: hidden;';

    const leftBtn = document.createElement('button');
    leftBtn.textContent = 'Download';
    leftBtn.style.cssText = `
      padding: 12px 20px;
      background: #8b5cf6;
      color: white;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    `;

    const rightBtn = document.createElement('button');
    rightBtn.innerHTML = `
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    `;
    rightBtn.style.cssText = `
      padding: 12px;
      background: #7c3aed;
      color: white;
      border: none;
      border-left: 1px solid rgba(255,255,255,0.2);
      cursor: pointer;
      transition: background 0.2s;
      display: flex;
      align-items: center;
    `;

    leftBtn.addEventListener('mouseenter', () => {
      leftBtn.style.background = '#7c3aed';
    });

    leftBtn.addEventListener('mouseleave', () => {
      leftBtn.style.background = '#8b5cf6';
    });

    rightBtn.addEventListener('mouseenter', () => {
      rightBtn.style.background = '#6d28d9';
    });

    rightBtn.addEventListener('mouseleave', () => {
      rightBtn.style.background = '#7c3aed';
    });

    rightBtn.addEventListener('click', () => {
      alert('Dropdown options would appear here');
    });

    wrapper.appendChild(leftBtn);
    wrapper.appendChild(rightBtn);
    containerRef.current.appendChild(wrapper);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export const dropdownjs4Code = `import { useEffect, useRef } from 'react';

export default function DropdownJS4Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: inline-flex; border-radius: 8px; overflow: hidden;';

    const leftBtn = document.createElement('button');
    leftBtn.textContent = 'Download';
    leftBtn.style.cssText = \\\`
      padding: 12px 20px;
      background: #8b5cf6;
      color: white;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    \\\`;

    const rightBtn = document.createElement('button');
    rightBtn.innerHTML = \\\`
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    \\\`;
    rightBtn.style.cssText = \\\`
      padding: 12px;
      background: #7c3aed;
      color: white;
      border: none;
      border-left: 1px solid rgba(255,255,255,0.2);
      cursor: pointer;
      transition: background 0.2s;
      display: flex;
      align-items: center;
    \\\`;

    leftBtn.addEventListener('mouseenter', () => {
      leftBtn.style.background = '#7c3aed';
    });

    leftBtn.addEventListener('mouseleave', () => {
      leftBtn.style.background = '#8b5cf6';
    });

    rightBtn.addEventListener('mouseenter', () => {
      rightBtn.style.background = '#6d28d9';
    });

    rightBtn.addEventListener('mouseleave', () => {
      rightBtn.style.background = '#7c3aed';
    });

    rightBtn.addEventListener('click', () => {
      alert('Dropdown options would appear here');
    });

    wrapper.appendChild(leftBtn);
    wrapper.appendChild(rightBtn);
    containerRef.current.appendChild(wrapper);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}`;
