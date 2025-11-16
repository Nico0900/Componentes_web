export default function Table12Example() {
  const logs = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    timestamp: `2024-01-20 ${String(10 + i).padStart(2, '0')}:${String((i * 3) % 60).padStart(2, '0')}`,
    level: ['INFO', 'WARNING', 'ERROR', 'DEBUG'][i % 4],
    message: [
      'User authentication successful',
      'Database connection timeout',
      'Payment processing failed',
      'Cache miss for key: user_123',
      'API rate limit exceeded',
      'File upload completed',
    ][i % 6],
    source: ['auth.service', 'db.connector', 'payment.api', 'cache.manager', 'api.gateway', 'upload.handler'][i % 6],
  }));

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="h-[500px] overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-slate-900 shadow-lg z-10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Level</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Message</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Source</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-3 text-xs text-slate-400 font-mono">{log.timestamp}</td>
                  <td className="px-6 py-3 text-xs">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      log.level === 'ERROR'
                        ? 'bg-red-500/20 text-red-400'
                        : log.level === 'WARNING'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : log.level === 'INFO'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-slate-500/20 text-slate-400'
                    }`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-300">{log.message}</td>
                  <td className="px-6 py-3 text-xs text-slate-500 font-mono">{log.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table12Code = `export default function Table12Example() {
  const logs = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    timestamp: \`2024-01-20 \${String(10 + i).padStart(2, '0')}:\${String((i * 3) % 60).padStart(2, '0')}\`,
    level: ['INFO', 'WARNING', 'ERROR', 'DEBUG'][i % 4],
    message: [
      'User authentication successful',
      'Database connection timeout',
      'Payment processing failed',
      'Cache miss for key: user_123',
      'API rate limit exceeded',
      'File upload completed',
    ][i % 6],
    source: ['auth.service', 'db.connector', 'payment.api', 'cache.manager', 'api.gateway', 'upload.handler'][i % 6],
  }));

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="h-[500px] overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-slate-900 shadow-lg z-10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Level</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Message</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Source</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-3 text-xs text-slate-400 font-mono">{log.timestamp}</td>
                  <td className="px-6 py-3 text-xs">
                    <span className={\`px-2 py-1 rounded text-xs font-medium \${
                      log.level === 'ERROR'
                        ? 'bg-red-500/20 text-red-400'
                        : log.level === 'WARNING'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : log.level === 'INFO'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-slate-500/20 text-slate-400'
                    }\`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-300">{log.message}</td>
                  <td className="px-6 py-3 text-xs text-slate-500 font-mono">{log.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
