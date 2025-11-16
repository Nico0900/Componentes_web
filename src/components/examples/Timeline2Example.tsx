export default function Timeline2Example() {
  const events = [
    { id: 1, title: 'Q1 2024', description: 'Planning' },
    { id: 2, title: 'Q2 2024', description: 'Development' },
    { id: 3, title: 'Q3 2024', description: 'Testing' },
    { id: 4, title: 'Q4 2024', description: 'Launch' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />

        {/* Timeline Items */}
        <div className="flex justify-between">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex flex-col items-center">
              {/* Marker */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-slate-900 flex items-center justify-center z-10 mb-4">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center min-w-[140px] hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-base font-semibold text-slate-200 mb-1">{event.title}</h3>
                <p className="text-slate-400 text-xs">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const timeline2Code = `export default function Timeline2Example() {
  const events = [
    { id: 1, title: 'Q1 2024', description: 'Planning' },
    { id: 2, title: 'Q2 2024', description: 'Development' },
    { id: 3, title: 'Q3 2024', description: 'Testing' },
    { id: 4, title: 'Q4 2024', description: 'Launch' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />

        {/* Timeline Items */}
        <div className="flex justify-between">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex flex-col items-center">
              {/* Marker */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-slate-900 flex items-center justify-center z-10 mb-4">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center min-w-[140px] hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-base font-semibold text-slate-200 mb-1">{event.title}</h3>
                <p className="text-slate-400 text-xs">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
