export default function Timeline10Example() {
  const events = [
    { id: 1, title: 'Requirements Gathered', description: 'All stakeholder requirements documented', completed: true, progress: 100 },
    { id: 2, title: 'Development Started', description: 'Sprint 1 in progress', completed: true, progress: 100 },
    { id: 3, title: 'Testing Phase', description: 'QA testing underway', completed: false, progress: 65 },
    { id: 4, title: 'Final Deployment', description: 'Production release pending', completed: false, progress: 0 },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-12">
              {/* Status Marker */}
              <div className={`absolute left-0 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center ${
                event.completed
                  ? 'bg-gradient-to-br from-rose-500 to-pink-500'
                  : event.progress > 0
                  ? 'bg-gradient-to-br from-yellow-500 to-orange-500'
                  : 'bg-slate-700'
              }`}>
                {event.completed ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : event.progress > 0 ? (
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                )}
              </div>

              {/* Content */}
              <div className={`bg-slate-800/50 border rounded-lg p-4 transition-all duration-300 ${
                event.completed
                  ? 'border-rose-500/50'
                  : event.progress > 0
                  ? 'border-yellow-500/50'
                  : 'border-slate-700/50'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-200">{event.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    event.completed
                      ? 'bg-rose-500/20 text-rose-400'
                      : event.progress > 0
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-slate-700/50 text-slate-500'
                  }`}>
                    {event.completed ? 'Done' : event.progress > 0 ? 'Active' : 'Pending'}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{event.description}</p>

                {/* Progress Bar */}
                <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 h-full transition-all duration-500 ${
                      event.completed
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500'
                        : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                    }`}
                    style={{ width: `${event.progress}%` }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-slate-500">{event.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const timeline10Code = `export default function Timeline10Example() {
  const events = [
    { id: 1, title: 'Requirements Gathered', description: 'All stakeholder requirements documented', completed: true, progress: 100 },
    { id: 2, title: 'Development Started', description: 'Sprint 1 in progress', completed: true, progress: 100 },
    { id: 3, title: 'Testing Phase', description: 'QA testing underway', completed: false, progress: 65 },
    { id: 4, title: 'Final Deployment', description: 'Production release pending', completed: false, progress: 0 },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-12">
              {/* Status Marker */}
              <div className={\`absolute left-0 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center \${
                event.completed
                  ? 'bg-gradient-to-br from-rose-500 to-pink-500'
                  : event.progress > 0
                  ? 'bg-gradient-to-br from-yellow-500 to-orange-500'
                  : 'bg-slate-700'
              }\`}>
                {event.completed ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : event.progress > 0 ? (
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                )}
              </div>

              {/* Content */}
              <div className={\`bg-slate-800/50 border rounded-lg p-4 transition-all duration-300 \${
                event.completed
                  ? 'border-rose-500/50'
                  : event.progress > 0
                  ? 'border-yellow-500/50'
                  : 'border-slate-700/50'
              }\`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-200">{event.title}</h3>
                  <span className={\`text-xs font-semibold px-2 py-1 rounded \${
                    event.completed
                      ? 'bg-rose-500/20 text-rose-400'
                      : event.progress > 0
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-slate-700/50 text-slate-500'
                  }\`}>
                    {event.completed ? 'Done' : event.progress > 0 ? 'Active' : 'Pending'}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{event.description}</p>

                {/* Progress Bar */}
                <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className={\`absolute left-0 top-0 h-full transition-all duration-500 \${
                      event.completed
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500'
                        : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                    }\`}
                    style={{ width: \`\${event.progress}%\` }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-slate-500">{event.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
