import { useState, useEffect } from 'react';

export default function Timeline11Example() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const events = [
    { id: 1, title: 'Project Kickoff', description: 'Initial meeting and planning session', time: 'Week 1' },
    { id: 2, title: 'Design Sprint', description: 'UI/UX design and prototyping', time: 'Week 2' },
    { id: 3, title: 'Development', description: 'Feature implementation and coding', time: 'Week 3-4' },
    { id: 4, title: 'Launch', description: 'Product release and celebration', time: 'Week 5' },
  ];

  useEffect(() => {
    events.forEach((event, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, event.id]);
      }, index * 300);
    });
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />

        <div className="space-y-8">
          {events.map((event, index) => {
            const isVisible = visibleItems.includes(event.id);
            return (
              <div
                key={event.id}
                className={`relative pl-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <div
                  className={`absolute left-0 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center transition-all duration-500 ${
                    isVisible
                      ? 'bg-gradient-to-br from-violet-500 to-purple-500 scale-100'
                      : 'bg-slate-700 scale-0'
                  }`}
                >
                  {isVisible && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-violet-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-200">{event.title}</h3>
                    <span className="text-xs text-violet-400 whitespace-nowrap ml-4 font-medium">
                      {event.time}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const timeline11Code = `import { useState, useEffect } from 'react';

export default function Timeline11Example() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const events = [
    { id: 1, title: 'Project Kickoff', description: 'Initial meeting and planning session', time: 'Week 1' },
    { id: 2, title: 'Design Sprint', description: 'UI/UX design and prototyping', time: 'Week 2' },
    { id: 3, title: 'Development', description: 'Feature implementation and coding', time: 'Week 3-4' },
    { id: 4, title: 'Launch', description: 'Product release and celebration', time: 'Week 5' },
  ];

  useEffect(() => {
    events.forEach((event, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, event.id]);
      }, index * 300);
    });
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />

        <div className="space-y-8">
          {events.map((event, index) => {
            const isVisible = visibleItems.includes(event.id);
            return (
              <div
                key={event.id}
                className={\`relative pl-12 transition-all duration-700 \${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }\`}
              >
                <div
                  className={\`absolute left-0 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center transition-all duration-500 \${
                    isVisible
                      ? 'bg-gradient-to-br from-violet-500 to-purple-500 scale-100'
                      : 'bg-slate-700 scale-0'
                  }\`}
                >
                  {isVisible && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-violet-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-200">{event.title}</h3>
                    <span className="text-xs text-violet-400 whitespace-nowrap ml-4 font-medium">
                      {event.time}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}`;
