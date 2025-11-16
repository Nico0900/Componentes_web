export default function Timeline7Example() {
  const events = [
    { id: 1, title: 'Task Completed', description: 'All items checked and verified', icon: 'check', color: 'green' },
    { id: 2, title: 'In Progress', description: 'Currently working on this task', icon: 'clock', color: 'yellow' },
    { id: 3, title: 'Under Review', description: 'Awaiting approval from team', icon: 'eye', color: 'blue' },
    { id: 4, title: 'Scheduled', description: 'Planned for next sprint', icon: 'calendar', color: 'purple' },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'check':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />;
      case 'clock':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />;
      case 'eye':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />;
      case 'calendar':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
      default:
        return null;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return { bg: 'from-green-500 to-emerald-500', border: 'border-green-500/50', text: 'text-green-400' };
      case 'yellow':
        return { bg: 'from-yellow-500 to-amber-500', border: 'border-yellow-500/50', text: 'text-yellow-400' };
      case 'blue':
        return { bg: 'from-blue-500 to-cyan-500', border: 'border-blue-500/50', text: 'text-blue-400' };
      case 'purple':
        return { bg: 'from-purple-500 to-pink-500', border: 'border-purple-500/50', text: 'text-purple-400' };
      default:
        return { bg: 'from-gray-500 to-slate-500', border: 'border-gray-500/50', text: 'text-gray-400' };
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700/50" />

        <div className="space-y-8">
          {events.map((event) => {
            const colors = getColorClasses(event.color);
            return (
              <div key={event.id} className="relative pl-20">
                <div className={`absolute left-0 w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} border-4 border-slate-900 flex items-center justify-center shadow-lg`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {getIcon(event.icon)}
                  </svg>
                </div>

                <div className={`bg-slate-800/50 border ${colors.border} rounded-lg p-4 hover:bg-slate-800/70 transition-all duration-300`}>
                  <h3 className={`text-lg font-semibold ${colors.text} mb-2`}>{event.title}</h3>
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

export const timeline7Code = `export default function Timeline7Example() {
  const events = [
    { id: 1, title: 'Task Completed', description: 'All items checked and verified', icon: 'check', color: 'green' },
    { id: 2, title: 'In Progress', description: 'Currently working on this task', icon: 'clock', color: 'yellow' },
    { id: 3, title: 'Under Review', description: 'Awaiting approval from team', icon: 'eye', color: 'blue' },
    { id: 4, title: 'Scheduled', description: 'Planned for next sprint', icon: 'calendar', color: 'purple' },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'check':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />;
      case 'clock':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />;
      case 'eye':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />;
      case 'calendar':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
      default:
        return null;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return { bg: 'from-green-500 to-emerald-500', border: 'border-green-500/50', text: 'text-green-400' };
      case 'yellow':
        return { bg: 'from-yellow-500 to-amber-500', border: 'border-yellow-500/50', text: 'text-yellow-400' };
      case 'blue':
        return { bg: 'from-blue-500 to-cyan-500', border: 'border-blue-500/50', text: 'text-blue-400' };
      case 'purple':
        return { bg: 'from-purple-500 to-pink-500', border: 'border-purple-500/50', text: 'text-purple-400' };
      default:
        return { bg: 'from-gray-500 to-slate-500', border: 'border-gray-500/50', text: 'text-gray-400' };
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700/50" />

        <div className="space-y-8">
          {events.map((event) => {
            const colors = getColorClasses(event.color);
            return (
              <div key={event.id} className="relative pl-20">
                <div className={\`absolute left-0 w-16 h-16 rounded-xl bg-gradient-to-br \${colors.bg} border-4 border-slate-900 flex items-center justify-center shadow-lg\`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {getIcon(event.icon)}
                  </svg>
                </div>

                <div className={\`bg-slate-800/50 border \${colors.border} rounded-lg p-4 hover:bg-slate-800/70 transition-all duration-300\`}>
                  <h3 className={\`text-lg font-semibold \${colors.text} mb-2\`}>{event.title}</h3>
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
