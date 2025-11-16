export default function Table8Example() {
  const devices = [
    { id: 1, device: 'iPhone 15 Pro', os: 'iOS 17', screen: '6.1"', storage: '256GB', price: 999 },
    { id: 2, device: 'Samsung Galaxy S24', os: 'Android 14', screen: '6.2"', storage: '256GB', price: 899 },
    { id: 3, device: 'Google Pixel 8', os: 'Android 14', screen: '6.0"', storage: '128GB', price: 699 },
    { id: 4, device: 'OnePlus 12', os: 'Android 14', screen: '6.7"', storage: '512GB', price: 799 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        {/* Desktop/Tablet View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Device</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">OS</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Screen</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Storage</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{device.device}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{device.os}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{device.screen}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{device.storage}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">${device.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Card Layout */}
        <div className="md:hidden divide-y divide-slate-700/30">
          {devices.map((device) => (
            <div key={device.id} className="p-6 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-200">{device.device}</h3>
                <span className="text-lg font-bold text-emerald-400">${device.price}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 text-xs uppercase">OS</span>
                  <p className="text-slate-300 mt-1">{device.os}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-xs uppercase">Screen</span>
                  <p className="text-slate-300 mt-1">{device.screen}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-xs uppercase">Storage</span>
                  <p className="text-slate-300 mt-1">{device.storage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const table8Code = `export default function Table8Example() {
  const devices = [
    { id: 1, device: 'iPhone 15 Pro', os: 'iOS 17', screen: '6.1"', storage: '256GB', price: 999 },
    { id: 2, device: 'Samsung Galaxy S24', os: 'Android 14', screen: '6.2"', storage: '256GB', price: 899 },
    { id: 3, device: 'Google Pixel 8', os: 'Android 14', screen: '6.0"', storage: '128GB', price: 699 },
    { id: 4, device: 'OnePlus 12', os: 'Android 14', screen: '6.7"', storage: '512GB', price: 799 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        {/* Desktop/Tablet View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Device</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">OS</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Screen</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Storage</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{device.device}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{device.os}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{device.screen}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{device.storage}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">\${device.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Card Layout */}
        <div className="md:hidden divide-y divide-slate-700/30">
          {devices.map((device) => (
            <div key={device.id} className="p-6 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-200">{device.device}</h3>
                <span className="text-lg font-bold text-emerald-400">\${device.price}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 text-xs uppercase">OS</span>
                  <p className="text-slate-300 mt-1">{device.os}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-xs uppercase">Screen</span>
                  <p className="text-slate-300 mt-1">{device.screen}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-xs uppercase">Storage</span>
                  <p className="text-slate-300 mt-1">{device.storage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
