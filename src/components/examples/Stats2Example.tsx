export default function Stats2Example() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Stat 1 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-blue-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">VISITS</div>
          <div className="text-2xl font-bold text-slate-100">142,385</div>
        </div>

        {/* Stat 2 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-purple-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">SALES</div>
          <div className="text-2xl font-bold text-slate-100">$95,428</div>
        </div>

        {/* Stat 3 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-green-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">ORDERS</div>
          <div className="text-2xl font-bold text-slate-100">3,847</div>
        </div>

        {/* Stat 4 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-orange-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">CUSTOMERS</div>
          <div className="text-2xl font-bold text-slate-100">12,493</div>
        </div>

        {/* Stat 5 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-pink-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">AVG ORDER</div>
          <div className="text-2xl font-bold text-slate-100">$247.80</div>
        </div>

        {/* Stat 6 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-cyan-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">BOUNCE RATE</div>
          <div className="text-2xl font-bold text-slate-100">42.3%</div>
        </div>
      </div>
    </div>
  );
}

export const stats2Code = `export default function Stats2Example() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Stat 1 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-blue-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">VISITS</div>
          <div className="text-2xl font-bold text-slate-100">142,385</div>
        </div>

        {/* Stat 2 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-purple-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">SALES</div>
          <div className="text-2xl font-bold text-slate-100">$95,428</div>
        </div>

        {/* Stat 3 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-green-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">ORDERS</div>
          <div className="text-2xl font-bold text-slate-100">3,847</div>
        </div>

        {/* Stat 4 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-orange-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">CUSTOMERS</div>
          <div className="text-2xl font-bold text-slate-100">12,493</div>
        </div>

        {/* Stat 5 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-pink-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">AVG ORDER</div>
          <div className="text-2xl font-bold text-slate-100">$247.80</div>
        </div>

        {/* Stat 6 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-cyan-500/50 transition-all duration-300">
          <div className="text-slate-400 text-xs font-medium mb-1">BOUNCE RATE</div>
          <div className="text-2xl font-bold text-slate-100">42.3%</div>
        </div>
      </div>
    </div>
  );
}`;
