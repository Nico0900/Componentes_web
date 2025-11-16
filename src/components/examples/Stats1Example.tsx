export default function Stats1Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Basic Stat Card 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[200px] hover:border-blue-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-2">Total Users</div>
        <div className="text-4xl font-bold text-slate-100">24,583</div>
        <div className="text-slate-500 text-xs mt-2">Active accounts</div>
      </div>

      {/* Basic Stat Card 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[200px] hover:border-purple-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-2">Revenue</div>
        <div className="text-4xl font-bold text-slate-100">$84,290</div>
        <div className="text-slate-500 text-xs mt-2">This month</div>
      </div>

      {/* Basic Stat Card 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[200px] hover:border-green-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-2">Conversion Rate</div>
        <div className="text-4xl font-bold text-slate-100">3.24%</div>
        <div className="text-slate-500 text-xs mt-2">Average rate</div>
      </div>
    </div>
  );
}

export const stats1Code = `export default function Stats1Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Basic Stat Card 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[200px] hover:border-blue-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-2">Total Users</div>
        <div className="text-4xl font-bold text-slate-100">24,583</div>
        <div className="text-slate-500 text-xs mt-2">Active accounts</div>
      </div>

      {/* Basic Stat Card 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[200px] hover:border-purple-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-2">Revenue</div>
        <div className="text-4xl font-bold text-slate-100">$84,290</div>
        <div className="text-slate-500 text-xs mt-2">This month</div>
      </div>

      {/* Basic Stat Card 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[200px] hover:border-green-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-2">Conversion Rate</div>
        <div className="text-4xl font-bold text-slate-100">3.24%</div>
        <div className="text-slate-500 text-xs mt-2">Average rate</div>
      </div>
    </div>
  );
}`;
