export default function Timeline1Example() {
  const events = [
    { id: 1, title: 'Project Started', description: 'Initial project setup and planning phase', time: '2 hours ago' },
    { id: 2, title: 'Development Phase', description: 'Core features implementation and testing', time: '1 hour ago' },
    { id: 3, title: 'Review Process', description: 'Code review and quality assurance', time: '30 min ago' },
    { id: 4, title: 'Deployment', description: 'Production deployment and monitoring', time: 'Just now' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

        {/* Timeline Items */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-12">
              {/* Marker */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-slate-900 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Content */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-200">{event.title}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{event.time}</span>
                </div>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const timeline1Code = `export default function Timeline1Example() {
  const events = [
    { id: 1, title: 'Project Started', description: 'Initial project setup and planning phase', time: '2 hours ago' },
    { id: 2, title: 'Development Phase', description: 'Core features implementation and testing', time: '1 hour ago' },
    { id: 3, title: 'Review Process', description: 'Code review and quality assurance', time: '30 min ago' },
    { id: 4, title: 'Deployment', description: 'Production deployment and monitoring', time: 'Just now' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

        {/* Timeline Items */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-12">
              {/* Marker */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-slate-900 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Content */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-200">{event.title}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{event.time}</span>
                </div>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
