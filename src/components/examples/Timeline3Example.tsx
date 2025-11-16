export default function Timeline3Example() {
  const events = [
    { id: 1, title: 'Account Created', description: 'Welcome to our platform', time: 'Jan 2024' },
    { id: 2, title: 'First Project', description: 'Created your first project', time: 'Feb 2024' },
    { id: 3, title: 'Team Joined', description: 'Collaborated with team members', time: 'Mar 2024' },
    { id: 4, title: 'Milestone Reached', description: '100 successful deployments', time: 'Apr 2024' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500 transform -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex items-center justify-center">
              {/* Marker */}
              <div className="absolute left-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-4 border-slate-900 transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div className="w-5/12 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-center">
                  <span className="text-xs text-slate-500 block mb-1">{event.time}</span>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">{event.title}</h3>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const timeline3Code = `export default function Timeline3Example() {
  const events = [
    { id: 1, title: 'Account Created', description: 'Welcome to our platform', time: 'Jan 2024' },
    { id: 2, title: 'First Project', description: 'Created your first project', time: 'Feb 2024' },
    { id: 3, title: 'Team Joined', description: 'Collaborated with team members', time: 'Mar 2024' },
    { id: 4, title: 'Milestone Reached', description: '100 successful deployments', time: 'Apr 2024' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500 transform -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex items-center justify-center">
              {/* Marker */}
              <div className="absolute left-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-4 border-slate-900 transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div className="w-5/12 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-center">
                  <span className="text-xs text-slate-500 block mb-1">{event.time}</span>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">{event.title}</h3>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
