export default function Table3Example() {
  const orders = [
    { id: 'ORD-001', customer: 'John Doe', date: '2024-01-15', total: 249.99, status: 'Completed' },
    { id: 'ORD-002', customer: 'Jane Smith', date: '2024-01-16', total: 599.50, status: 'Processing' },
    { id: 'ORD-003', customer: 'Mike Johnson', date: '2024-01-17', total: 149.99, status: 'Shipped' },
    { id: 'ORD-004', customer: 'Sarah Williams', date: '2024-01-18', total: 899.00, status: 'Completed' },
    { id: 'ORD-005', customer: 'Tom Brown', date: '2024-01-19', total: 349.99, status: 'Pending' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Total</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 text-sm text-slate-300 font-mono border border-slate-700/50">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium border border-slate-700/50">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 border border-slate-700/50">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold border border-slate-700/50">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm border border-slate-700/50">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400'
                        : order.status === 'Processing'
                        ? 'bg-blue-500/20 text-blue-400'
                        : order.status === 'Shipped'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table3Code = `export default function Table3Example() {
  const orders = [
    { id: 'ORD-001', customer: 'John Doe', date: '2024-01-15', total: 249.99, status: 'Completed' },
    { id: 'ORD-002', customer: 'Jane Smith', date: '2024-01-16', total: 599.50, status: 'Processing' },
    { id: 'ORD-003', customer: 'Mike Johnson', date: '2024-01-17', total: 149.99, status: 'Shipped' },
    { id: 'ORD-004', customer: 'Sarah Williams', date: '2024-01-18', total: 899.00, status: 'Completed' },
    { id: 'ORD-005', customer: 'Tom Brown', date: '2024-01-19', total: 349.99, status: 'Pending' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Total</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider border border-slate-700/50">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 text-sm text-slate-300 font-mono border border-slate-700/50">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium border border-slate-700/50">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 border border-slate-700/50">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold border border-slate-700/50">\${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm border border-slate-700/50">
                    <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${
                      order.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400'
                        : order.status === 'Processing'
                        ? 'bg-blue-500/20 text-blue-400'
                        : order.status === 'Shipped'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }\`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
