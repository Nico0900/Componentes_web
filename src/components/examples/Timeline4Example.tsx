export default function Timeline4Example() {
  const events = [
    { id: 1, title: 'System Update', description: 'Version 2.0 released with new features', time: '10:30 AM' },
    { id: 2, title: 'Security Patch', description: 'Critical security updates applied', time: '11:45 AM' },
    { id: 3, title: 'Database Migration', description: 'Successfully migrated to new database', time: '02:15 PM' },
    { id: 4, title: 'Performance Boost', description: 'Optimizations improved speed by 40%', time: '04:20 PM' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="flex items-start gap-4">
            {/* Time Badge */}
            <div className="flex-shrink-0 w-20 pt-1">
              <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-md text-indigo-400 text-xs font-medium">
                {event.time}
              </span>
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-indigo-500 border-2 border-slate-900" />
              {index < events.length - 1 && (
                <div className="w-0.5 h-full min-h-[60px] bg-indigo-500/30" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{event.title}</h3>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const timeline4Code = `export default function Timeline4Example() {
  const events = [
    { id: 1, title: 'System Update', description: 'Version 2.0 released with new features', time: '10:30 AM' },
    { id: 2, title: 'Security Patch', description: 'Critical security updates applied', time: '11:45 AM' },
    { id: 3, title: 'Database Migration', description: 'Successfully migrated to new database', time: '02:15 PM' },
    { id: 4, title: 'Performance Boost', description: 'Optimizations improved speed by 40%', time: '04:20 PM' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="flex items-start gap-4">
            {/* Time Badge */}
            <div className="flex-shrink-0 w-20 pt-1">
              <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-md text-indigo-400 text-xs font-medium">
                {event.time}
              </span>
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-indigo-500 border-2 border-slate-900" />
              {index < events.length - 1 && (
                <div className="w-0.5 h-full min-h-[60px] bg-indigo-500/30" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{event.title}</h3>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;
