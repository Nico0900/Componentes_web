export default function Table15Example() {
  const metrics = [
    { id: 1, metric: 'CPU Usage', value: 45, unit: '%', status: 'normal' },
    { id: 2, metric: 'Memory', value: 8.2, unit: 'GB', status: 'normal' },
    { id: 3, metric: 'Disk I/O', value: 234, unit: 'MB/s', status: 'high' },
    { id: 4, metric: 'Network', value: 156, unit: 'Mbps', status: 'normal' },
    { id: 5, metric: 'Requests/sec', value: 1247, unit: 'req/s', status: 'normal' },
    { id: 6, metric: 'Error Rate', value: 0.3, unit: '%', status: 'low' },
    { id: 7, metric: 'Response Time', value: 124, unit: 'ms', status: 'normal' },
    { id: 8, metric: 'Active Users', value: 8934, unit: 'users', status: 'high' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-4 py-2 text-left text-xs font-semibold text-slate-300 uppercase">Metric</th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-slate-300 uppercase">Value</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-slate-300 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric) => (
                <tr key={metric.id} className="border-t border-slate-700/30">
                  <td className="px-4 py-2 text-sm text-slate-200">{metric.metric}</td>
                  <td className="px-4 py-2 text-sm text-slate-300 text-right font-mono">
                    {metric.value} <span className="text-slate-500">{metric.unit}</span>
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <span className={`inline-block w-2 h-2 rounded-full ${
                      metric.status === 'high'
                        ? 'bg-orange-400'
                        : metric.status === 'low'
                        ? 'bg-blue-400'
                        : 'bg-green-400'
                    }`} />
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

export const table15Code = `export default function Table15Example() {
  const metrics = [
    { id: 1, metric: 'CPU Usage', value: 45, unit: '%', status: 'normal' },
    { id: 2, metric: 'Memory', value: 8.2, unit: 'GB', status: 'normal' },
    { id: 3, metric: 'Disk I/O', value: 234, unit: 'MB/s', status: 'high' },
    { id: 4, metric: 'Network', value: 156, unit: 'Mbps', status: 'normal' },
    { id: 5, metric: 'Requests/sec', value: 1247, unit: 'req/s', status: 'normal' },
    { id: 6, metric: 'Error Rate', value: 0.3, unit: '%', status: 'low' },
    { id: 7, metric: 'Response Time', value: 124, unit: 'ms', status: 'normal' },
    { id: 8, metric: 'Active Users', value: 8934, unit: 'users', status: 'high' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-4 py-2 text-left text-xs font-semibold text-slate-300 uppercase">Metric</th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-slate-300 uppercase">Value</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-slate-300 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric) => (
                <tr key={metric.id} className="border-t border-slate-700/30">
                  <td className="px-4 py-2 text-sm text-slate-200">{metric.metric}</td>
                  <td className="px-4 py-2 text-sm text-slate-300 text-right font-mono">
                    {metric.value} <span className="text-slate-500">{metric.unit}</span>
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <span className={\`inline-block w-2 h-2 rounded-full \${
                      metric.status === 'high'
                        ? 'bg-orange-400'
                        : metric.status === 'low'
                        ? 'bg-blue-400'
                        : 'bg-green-400'
                    }\`} />
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
