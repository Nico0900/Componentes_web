import { useState } from 'react';

export default function Toggle1Example() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 ${
        isActive ? 'bg-emerald-500' : 'bg-slate-600'
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
          isActive ? 'translate-x-9' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

export const toggle1Code = `import { useState } from 'react';

export default function Toggle1Example() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={\`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 \${
        isActive ? 'bg-emerald-500' : 'bg-slate-600'
      }\`}
    >
      <span
        className={\`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 \${
          isActive ? 'translate-x-9' : 'translate-x-1'
        }\`}
      />
    </button>
  );
}`;
