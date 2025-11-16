import { useState } from 'react';

export default function Tooltip13Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-all"
        >
          Animated Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg animate-fade-in-up">
            Smooth animation entrance!
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export const tooltip13Code = `import { useState } from 'react';

export default function Tooltip13Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-all"
        >
          Animated Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg animate-fade-in-up">
            Smooth animation entrance!
          </div>
        )}
      </div>

      <style jsx>{\`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out;
        }
      \`}</style>
    </div>
  );
}`;
