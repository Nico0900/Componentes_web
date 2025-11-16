export default function Timeline12Example() {
  const events = [
    { id: 1, title: 'Success', description: 'Feature deployed successfully', color: 'green' },
    { id: 2, title: 'Warning', description: 'Performance threshold exceeded', color: 'yellow' },
    { id: 3, title: 'Error', description: 'Critical bug detected', color: 'red' },
    { id: 4, title: 'Info', description: 'New update available', color: 'blue' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        line: 'bg-green-500',
        marker: 'from-green-500 to-emerald-500',
        border: 'border-green-500/50',
        text: 'text-green-400',
        badge: 'bg-green-500/20 text-green-400',
      },
      yellow: {
        line: 'bg-yellow-500',
        marker: 'from-yellow-500 to-amber-500',
        border: 'border-yellow-500/50',
        text: 'text-yellow-400',
        badge: 'bg-yellow-500/20 text-yellow-400',
      },
      red: {
        line: 'bg-red-500',
        marker: 'from-red-500 to-rose-500',
        border: 'border-red-500/50',
        text: 'text-red-400',
        badge: 'bg-red-500/20 text-red-400',
      },
      blue: {
        line: 'bg-blue-500',
        marker: 'from-blue-500 to-cyan-500',
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        badge: 'bg-blue-500/20 text-blue-400',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        {events.map((event, index) => {
          const colors = getColorClasses(event.color);
          return (
            <div key={event.id} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.marker} border-4 border-slate-900 flex items-center justify-center shadow-lg`}>
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                {index < events.length - 1 && (
                  <div className={`w-0.5 h-full min-h-[60px] ${colors.line} opacity-30`} />
                )}
              </div>

              <div className="flex-1 pb-6">
                <div className={`bg-slate-800/50 border ${colors.border} rounded-lg p-4 hover:bg-slate-800/70 transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-lg font-semibold ${colors.text}`}>{event.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${colors.badge}`}>
                      {event.color.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const timeline12Code = `export default function Timeline12Example() {
  const events = [
    { id: 1, title: 'Success', description: 'Feature deployed successfully', color: 'green' },
    { id: 2, title: 'Warning', description: 'Performance threshold exceeded', color: 'yellow' },
    { id: 3, title: 'Error', description: 'Critical bug detected', color: 'red' },
    { id: 4, title: 'Info', description: 'New update available', color: 'blue' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        line: 'bg-green-500',
        marker: 'from-green-500 to-emerald-500',
        border: 'border-green-500/50',
        text: 'text-green-400',
        badge: 'bg-green-500/20 text-green-400',
      },
      yellow: {
        line: 'bg-yellow-500',
        marker: 'from-yellow-500 to-amber-500',
        border: 'border-yellow-500/50',
        text: 'text-yellow-400',
        badge: 'bg-yellow-500/20 text-yellow-400',
      },
      red: {
        line: 'bg-red-500',
        marker: 'from-red-500 to-rose-500',
        border: 'border-red-500/50',
        text: 'text-red-400',
        badge: 'bg-red-500/20 text-red-400',
      },
      blue: {
        line: 'bg-blue-500',
        marker: 'from-blue-500 to-cyan-500',
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        badge: 'bg-blue-500/20 text-blue-400',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        {events.map((event, index) => {
          const colors = getColorClasses(event.color);
          return (
            <div key={event.id} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className={\`w-10 h-10 rounded-full bg-gradient-to-br \${colors.marker} border-4 border-slate-900 flex items-center justify-center shadow-lg\`}>
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                {index < events.length - 1 && (
                  <div className={\`w-0.5 h-full min-h-[60px] \${colors.line} opacity-30\`} />
                )}
              </div>

              <div className="flex-1 pb-6">
                <div className={\`bg-slate-800/50 border \${colors.border} rounded-lg p-4 hover:bg-slate-800/70 transition-all duration-300\`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={\`text-lg font-semibold \${colors.text}\`}>{event.title}</h3>
                    <span className={\`text-xs font-semibold px-2 py-1 rounded \${colors.badge}\`}>
                      {event.color.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}`;
