export default function Timeline8Example() {
  const events = [
    { id: 1, title: 'Product Launch', description: 'Official release of version 1.0', date: new Date('2024-01-15') },
    { id: 2, title: 'Beta Testing', description: 'Public beta program started', date: new Date('2024-02-20') },
    { id: 3, title: 'Feature Update', description: 'Added new collaboration tools', date: new Date('2024-03-10') },
    { id: 4, title: 'Major Milestone', description: 'Reached 10,000 users', date: new Date('2024-04-05') },
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500 transform -translate-x-1/2" />

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Date Badge */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-2 border-4 border-slate-900">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{event.date.getDate()}</div>
                    <div className="text-white text-xs">{event.date.toLocaleDateString('en-US', { month: 'short' })}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-center mb-2">
                    <span className="text-xs text-orange-400 font-medium">{getMonthYear(event.date)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2 text-center">{event.title}</h3>
                  <p className="text-slate-400 text-sm text-center">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const timeline8Code = `export default function Timeline8Example() {
  const events = [
    { id: 1, title: 'Product Launch', description: 'Official release of version 1.0', date: new Date('2024-01-15') },
    { id: 2, title: 'Beta Testing', description: 'Public beta program started', date: new Date('2024-02-20') },
    { id: 3, title: 'Feature Update', description: 'Added new collaboration tools', date: new Date('2024-03-10') },
    { id: 4, title: 'Major Milestone', description: 'Reached 10,000 users', date: new Date('2024-04-05') },
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500 transform -translate-x-1/2" />

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Date Badge */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-2 border-4 border-slate-900">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{event.date.getDate()}</div>
                    <div className="text-white text-xs">{event.date.toLocaleDateString('en-US', { month: 'short' })}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-center mb-2">
                    <span className="text-xs text-orange-400 font-medium">{getMonthYear(event.date)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2 text-center">{event.title}</h3>
                  <p className="text-slate-400 text-sm text-center">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
