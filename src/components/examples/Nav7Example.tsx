import { useState } from 'react';

export default function Nav7Example() {
  const [breadcrumbs, setBreadcrumbs] = useState(['Home', 'Products', 'Electronics', 'Laptops']);

  const navigateTo = (index: number) => {
    setBreadcrumbs(breadcrumbs.slice(0, index + 1));
  };

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm px-6 py-4">
      <ol className="flex items-center gap-2 flex-wrap">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            <button
              onClick={() => navigateTo(index)}
              className={`text-sm font-medium transition-colors duration-300 ${
                index === breadcrumbs.length - 1
                  ? 'text-blue-400 cursor-default'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {crumb}
            </button>
            {index < breadcrumbs.length - 1 && (
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const nav7Code = `import { useState } from 'react';

export default function Nav7Example() {
  const [breadcrumbs, setBreadcrumbs] = useState(['Home', 'Products', 'Electronics', 'Laptops']);

  const navigateTo = (index: number) => {
    setBreadcrumbs(breadcrumbs.slice(0, index + 1));
  };

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm px-6 py-4">
      <ol className="flex items-center gap-2 flex-wrap">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            <button
              onClick={() => navigateTo(index)}
              className={{\`text-sm font-medium transition-colors duration-300 \${
                index === breadcrumbs.length - 1
                  ? 'text-blue-400 cursor-default'
                  : 'text-slate-400 hover:text-slate-200'
              }\`}}
            >
              {crumb}
            </button>
            {index < breadcrumbs.length - 1 && (
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}`;
