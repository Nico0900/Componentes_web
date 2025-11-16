export default function Timeline6Example() {
  const events = [
    { id: 1, title: 'Design Phase', description: 'UI/UX wireframes completed', time: 'Week 1', side: 'left' },
    { id: 2, title: 'Backend Setup', description: 'API and database infrastructure', time: 'Week 2', side: 'right' },
    { id: 3, title: 'Frontend Build', description: 'Component library development', time: 'Week 3', side: 'left' },
    { id: 4, title: 'Integration', description: 'Connect frontend with backend', time: 'Week 4', side: 'right' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500 transform -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.id} className={`flex items-center ${event.side === 'right' ? 'flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="w-5/12">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-teal-500/50 transition-all duration-300">
                  <span className="text-xs text-teal-400 font-semibold">{event.time}</span>
                  <h3 className="text-lg font-semibold text-slate-200 mt-1 mb-2">{event.title}</h3>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>

              {/* Marker */}
              <div className="w-2/12 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 border-4 border-slate-900 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Empty Space */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const timeline6Code = `export default function Timeline6Example() {
  const events = [
    { id: 1, title: 'Design Phase', description: 'UI/UX wireframes completed', time: 'Week 1', side: 'left' },
    { id: 2, title: 'Backend Setup', description: 'API and database infrastructure', time: 'Week 2', side: 'right' },
    { id: 3, title: 'Frontend Build', description: 'Component library development', time: 'Week 3', side: 'left' },
    { id: 4, title: 'Integration', description: 'Connect frontend with backend', time: 'Week 4', side: 'right' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500 transform -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.id} className={\`flex items-center \${event.side === 'right' ? 'flex-row-reverse' : ''}\`}>
              {/* Content */}
              <div className="w-5/12">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-teal-500/50 transition-all duration-300">
                  <span className="text-xs text-teal-400 font-semibold">{event.time}</span>
                  <h3 className="text-lg font-semibold text-slate-200 mt-1 mb-2">{event.title}</h3>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>

              {/* Marker */}
              <div className="w-2/12 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 border-4 border-slate-900 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Empty Space */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
