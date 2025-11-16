export default function Stats10Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Gradient Card 1 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl p-6 min-w-[240px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="text-violet-100 text-sm font-medium mb-2">Total Sales</div>
          <div className="text-4xl font-bold text-white mb-1">$156.2K</div>
          <div className="text-violet-200 text-xs">+24% vs last month</div>
        </div>
      </div>

      {/* Gradient Card 2 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 min-w-[240px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="text-cyan-100 text-sm font-medium mb-2">New Users</div>
          <div className="text-4xl font-bold text-white mb-1">3,842</div>
          <div className="text-cyan-200 text-xs">+16% vs last month</div>
        </div>
      </div>

      {/* Gradient Card 3 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-6 min-w-[240px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="text-pink-100 text-sm font-medium mb-2">Engagement</div>
          <div className="text-4xl font-bold text-white mb-1">94.3%</div>
          <div className="text-pink-200 text-xs">+8% vs last month</div>
        </div>
      </div>

      {/* Gradient Card 4 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 min-w-[240px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="text-emerald-100 text-sm font-medium mb-2">Active Now</div>
          <div className="text-4xl font-bold text-white mb-1">1,289</div>
          <div className="text-emerald-200 text-xs">Real-time count</div>
        </div>
      </div>
    </div>
  );
}

export const stats10Code = `export default function Stats10Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Gradient Card 1 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl p-6 min-w-[240px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="text-violet-100 text-sm font-medium mb-2">Total Sales</div>
          <div className="text-4xl font-bold text-white mb-1">$156.2K</div>
          <div className="text-violet-200 text-xs">+24% vs last month</div>
        </div>
      </div>

      {/* Gradient Card 2 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 min-w-[240px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="text-cyan-100 text-sm font-medium mb-2">New Users</div>
          <div className="text-4xl font-bold text-white mb-1">3,842</div>
          <div className="text-cyan-200 text-xs">+16% vs last month</div>
        </div>
      </div>

      {/* Gradient Card 3 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-6 min-w-[240px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="text-pink-100 text-sm font-medium mb-2">Engagement</div>
          <div className="text-4xl font-bold text-white mb-1">94.3%</div>
          <div className="text-pink-200 text-xs">+8% vs last month</div>
        </div>
      </div>

      {/* Gradient Card 4 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 min-w-[240px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative">
          <div className="text-emerald-100 text-sm font-medium mb-2">Active Now</div>
          <div className="text-4xl font-bold text-white mb-1">1,289</div>
          <div className="text-emerald-200 text-xs">Real-time count</div>
        </div>
      </div>
    </div>
  );
}`;
