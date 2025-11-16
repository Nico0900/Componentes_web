export default function Timeline15Example() {
  const events = [
    {
      id: 1,
      title: 'Design System Launch',
      description: 'Released comprehensive design system with 50+ components',
      category: 'Product',
      date: 'Mar 15, 2024',
    },
    {
      id: 2,
      title: 'API v2.0 Released',
      description: 'New REST API with GraphQL support and better performance',
      category: 'Development',
      date: 'Feb 28, 2024',
    },
    {
      id: 3,
      title: 'Mobile App Update',
      description: 'iOS and Android apps updated with dark mode support',
      category: 'Mobile',
      date: 'Feb 10, 2024',
    },
    {
      id: 4,
      title: 'Company Milestone',
      description: 'Reached 1 million active users worldwide',
      category: 'Business',
      date: 'Jan 20, 2024',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid gap-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-pink-400 transition-colors">
                      {event.title}
                    </h3>
                    <span className="flex-shrink-0 px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{event.description}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {index < events.length - 1 && (
              <div className="flex justify-center py-4">
                <div className="w-0.5 h-8 bg-gradient-to-b from-pink-500/50 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const timeline15Code = `export default function Timeline15Example() {
  const events = [
    {
      id: 1,
      title: 'Design System Launch',
      description: 'Released comprehensive design system with 50+ components',
      category: 'Product',
      date: 'Mar 15, 2024',
    },
    {
      id: 2,
      title: 'API v2.0 Released',
      description: 'New REST API with GraphQL support and better performance',
      category: 'Development',
      date: 'Feb 28, 2024',
    },
    {
      id: 3,
      title: 'Mobile App Update',
      description: 'iOS and Android apps updated with dark mode support',
      category: 'Mobile',
      date: 'Feb 10, 2024',
    },
    {
      id: 4,
      title: 'Company Milestone',
      description: 'Reached 1 million active users worldwide',
      category: 'Business',
      date: 'Jan 20, 2024',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid gap-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-pink-400 transition-colors">
                      {event.title}
                    </h3>
                    <span className="flex-shrink-0 px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{event.description}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {index < events.length - 1 && (
              <div className="flex justify-center py-4">
                <div className="w-0.5 h-8 bg-gradient-to-b from-pink-500/50 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}`;
