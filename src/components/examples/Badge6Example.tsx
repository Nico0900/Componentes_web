import { useState } from 'react';

export default function Badge6Example() {
  const [badges, setBadges] = useState([
    { id: 1, text: 'React', color: 'blue' },
    { id: 2, text: 'TypeScript', color: 'cyan' },
    { id: 3, text: 'Tailwind', color: 'teal' },
    { id: 4, text: 'Astro', color: 'purple' },
  ]);

  const removeBadge = (id: number) => {
    setBadges(badges.filter(badge => badge.id !== id));
  };

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-600/20 border-blue-500/30 text-blue-300',
    cyan: 'bg-cyan-600/20 border-cyan-500/30 text-cyan-300',
    teal: 'bg-teal-600/20 border-teal-500/30 text-teal-300',
    purple: 'bg-purple-600/20 border-purple-500/30 text-purple-300',
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center">
      {badges.map(badge => (
        <span
          key={badge.id}
          className={`flex items-center gap-1.5 px-3 py-1 border text-xs font-semibold rounded-full ${colorClasses[badge.color]}`}
        >
          {badge.text}
          <button
            onClick={() => removeBadge(badge.id)}
            className="hover:bg-white/10 rounded-full p-0.5 transition-colors duration-200"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </span>
      ))}
    </div>
  );
}

export const badge6Code = `import { useState } from 'react';

export default function Badge6Example() {
  const [badges, setBadges] = useState([
    { id: 1, text: 'React', color: 'blue' },
    { id: 2, text: 'TypeScript', color: 'cyan' },
    { id: 3, text: 'Tailwind', color: 'teal' },
    { id: 4, text: 'Astro', color: 'purple' },
  ]);

  const removeBadge = (id: number) => {
    setBadges(badges.filter(badge => badge.id !== id));
  };

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-600/20 border-blue-500/30 text-blue-300',
    cyan: 'bg-cyan-600/20 border-cyan-500/30 text-cyan-300',
    teal: 'bg-teal-600/20 border-teal-500/30 text-teal-300',
    purple: 'bg-purple-600/20 border-purple-500/30 text-purple-300',
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center">
      {badges.map(badge => (
        <span
          key={badge.id}
          className={\`flex items-center gap-1.5 px-3 py-1 border text-xs font-semibold rounded-full \${colorClasses[badge.color]}\`}
        >
          {badge.text}
          <button
            onClick={() => removeBadge(badge.id)}
            className="hover:bg-white/10 rounded-full p-0.5 transition-colors duration-200"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </span>
      ))}
    </div>
  );
}`;
