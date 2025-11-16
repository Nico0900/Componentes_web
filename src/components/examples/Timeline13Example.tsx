export default function Timeline13Example() {
  const events = [
    { id: 1, title: 'User registered', time: '2 min ago' },
    { id: 2, title: 'Profile updated', time: '5 min ago' },
    { id: 3, title: 'Post created', time: '12 min ago' },
    { id: 4, title: 'Comment added', time: '18 min ago' },
    { id: 5, title: 'Image uploaded', time: '23 min ago' },
    { id: 6, title: 'Settings changed', time: '35 min ago' },
  ];

  return (
    <div className="w-full max-w-lg mx-auto p-6">
      <div className="relative">
        <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-purple-500/30" />

        <div className="space-y-3">
          {events.map((event) => (
            <div key={event.id} className="relative pl-8 flex items-center gap-3 group">
              <div className="absolute left-0 w-3 h-3 rounded-full bg-purple-500 border-2 border-slate-900 group-hover:scale-125 transition-transform duration-200" />

              <div className="flex-1 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-purple-500/50 rounded-md px-3 py-2 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">{event.title}</span>
                  <span className="text-xs text-slate-500">{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const timeline13Code = `export default function Timeline13Example() {
  const events = [
    { id: 1, title: 'User registered', time: '2 min ago' },
    { id: 2, title: 'Profile updated', time: '5 min ago' },
    { id: 3, title: 'Post created', time: '12 min ago' },
    { id: 4, title: 'Comment added', time: '18 min ago' },
    { id: 5, title: 'Image uploaded', time: '23 min ago' },
    { id: 6, title: 'Settings changed', time: '35 min ago' },
  ];

  return (
    <div className="w-full max-w-lg mx-auto p-6">
      <div className="relative">
        <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-purple-500/30" />

        <div className="space-y-3">
          {events.map((event) => (
            <div key={event.id} className="relative pl-8 flex items-center gap-3 group">
              <div className="absolute left-0 w-3 h-3 rounded-full bg-purple-500 border-2 border-slate-900 group-hover:scale-125 transition-transform duration-200" />

              <div className="flex-1 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-purple-500/50 rounded-md px-3 py-2 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">{event.title}</span>
                  <span className="text-xs text-slate-500">{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
