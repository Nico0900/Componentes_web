import { useState, useEffect } from 'react';

export default function Tooltip5Example() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovering) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // 500ms delay
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timer);
  }, [isHovering]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all"
        >
          Delayed Tooltip (500ms)
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            This tooltip appears after a delay
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip5Code = `import { useState, useEffect } from 'react';

export default function Tooltip5Example() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovering) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // 500ms delay
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timer);
  }, [isHovering]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all"
        >
          Delayed Tooltip (500ms)
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            This tooltip appears after a delay
          </div>
        )}
      </div>
    </div>
  );
}`;
