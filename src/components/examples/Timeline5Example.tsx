export default function Timeline5Example() {
  const events = [
    { id: 1, title: 'Order Placed', description: 'Your order has been confirmed', time: 'Today' },
    { id: 2, title: 'Processing', description: 'Preparing your items for shipment', time: 'Today' },
    { id: 3, title: 'Shipped', description: 'Package is on the way', time: 'Tomorrow' },
    { id: 4, title: 'Delivered', description: 'Expected delivery date', time: 'In 3 days' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="flex flex-col items-end space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="flex items-start gap-4 w-full justify-end">
            {/* Content */}
            <div className="flex-1 max-w-md">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-200">{event.title}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{event.time}</span>
                </div>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center pt-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900" />
              {index < events.length - 1 && (
                <div className="w-0.5 h-full min-h-[60px] bg-emerald-500/30" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const timeline5Code = `export default function Timeline5Example() {
  const events = [
    { id: 1, title: 'Order Placed', description: 'Your order has been confirmed', time: 'Today' },
    { id: 2, title: 'Processing', description: 'Preparing your items for shipment', time: 'Today' },
    { id: 3, title: 'Shipped', description: 'Package is on the way', time: 'Tomorrow' },
    { id: 4, title: 'Delivered', description: 'Expected delivery date', time: 'In 3 days' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="flex flex-col items-end space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="flex items-start gap-4 w-full justify-end">
            {/* Content */}
            <div className="flex-1 max-w-md">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-200">{event.title}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{event.time}</span>
                </div>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center pt-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900" />
              {index < events.length - 1 && (
                <div className="w-0.5 h-full min-h-[60px] bg-emerald-500/30" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;
