export default function Timeline14Example() {
  const events = [
    {
      id: 1,
      title: 'New Product Release',
      description: 'Launched our latest product with advanced AI capabilities and improved user experience.',
      author: 'Sarah Johnson',
      role: 'Product Manager',
      time: '3 hours ago',
    },
    {
      id: 2,
      title: 'Team Expansion',
      description: 'Welcomed 15 new engineers to our growing development team across multiple locations.',
      author: 'Michael Chen',
      role: 'HR Director',
      time: '1 day ago',
    },
    {
      id: 3,
      title: 'Partnership Announcement',
      description: 'Formed strategic partnership with leading tech companies to enhance our service offerings.',
      author: 'Emily Rodriguez',
      role: 'Business Development',
      time: '3 days ago',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />

        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="relative pl-16">
              <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-slate-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-200">{event.title}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{event.time}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{event.description}</p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-700/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{event.author[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-300">{event.author}</div>
                    <div className="text-xs text-slate-500">{event.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const timeline14Code = `export default function Timeline14Example() {
  const events = [
    {
      id: 1,
      title: 'New Product Release',
      description: 'Launched our latest product with advanced AI capabilities and improved user experience.',
      author: 'Sarah Johnson',
      role: 'Product Manager',
      time: '3 hours ago',
    },
    {
      id: 2,
      title: 'Team Expansion',
      description: 'Welcomed 15 new engineers to our growing development team across multiple locations.',
      author: 'Michael Chen',
      role: 'HR Director',
      time: '1 day ago',
    },
    {
      id: 3,
      title: 'Partnership Announcement',
      description: 'Formed strategic partnership with leading tech companies to enhance our service offerings.',
      author: 'Emily Rodriguez',
      role: 'Business Development',
      time: '3 days ago',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />

        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="relative pl-16">
              <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-slate-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-200">{event.title}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{event.time}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{event.description}</p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-700/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{event.author[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-300">{event.author}</div>
                    <div className="text-xs text-slate-500">{event.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
