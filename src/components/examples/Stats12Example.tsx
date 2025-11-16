export default function Stats12Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Comparison 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-blue-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-4">Revenue</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-slate-500 text-xs mb-1">This Month</div>
            <div className="text-2xl font-bold text-slate-100">$84,290</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Last Month</div>
            <div className="text-2xl font-bold text-slate-400">$68,542</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+23% increase</span>
        </div>
      </div>

      {/* Comparison 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-purple-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-4">Customers</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-slate-500 text-xs mb-1">Current</div>
            <div className="text-2xl font-bold text-slate-100">12,847</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Previous</div>
            <div className="text-2xl font-bold text-slate-400">11,293</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+1,554 new customers</span>
        </div>
      </div>

      {/* Comparison 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-green-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-4">Conversion</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-slate-500 text-xs mb-1">Today</div>
            <div className="text-2xl font-bold text-slate-100">4.8%</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Yesterday</div>
            <div className="text-2xl font-bold text-slate-400">3.2%</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+50% improvement</span>
        </div>
      </div>
    </div>
  );
}

export const stats12Code = `export default function Stats12Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Comparison 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-blue-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-4">Revenue</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-slate-500 text-xs mb-1">This Month</div>
            <div className="text-2xl font-bold text-slate-100">$84,290</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Last Month</div>
            <div className="text-2xl font-bold text-slate-400">$68,542</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+23% increase</span>
        </div>
      </div>

      {/* Comparison 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-purple-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-4">Customers</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-slate-500 text-xs mb-1">Current</div>
            <div className="text-2xl font-bold text-slate-100">12,847</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Previous</div>
            <div className="text-2xl font-bold text-slate-400">11,293</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+1,554 new customers</span>
        </div>
      </div>

      {/* Comparison 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-green-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-4">Conversion</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-slate-500 text-xs mb-1">Today</div>
            <div className="text-2xl font-bold text-slate-100">4.8%</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Yesterday</div>
            <div className="text-2xl font-bold text-slate-400">3.2%</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+50% improvement</span>
        </div>
      </div>
    </div>
  );
}`;
