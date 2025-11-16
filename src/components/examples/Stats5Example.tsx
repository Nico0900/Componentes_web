export default function Stats5Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Trend Up */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Sales</div>
          <div className="flex items-center gap-1 text-green-400 text-xs font-semibold bg-green-500/20 px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>12.5%</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-slate-100 mb-1">$54,239</div>
        <div className="text-slate-500 text-xs">+$6,024 from last month</div>
      </div>

      {/* Trend Down */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-red-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Bounce Rate</div>
          <div className="flex items-center gap-1 text-red-400 text-xs font-semibold bg-red-500/20 px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>3.2%</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-slate-100 mb-1">38.4%</div>
        <div className="text-slate-500 text-xs">-1.3% from last month</div>
      </div>

      {/* Trend Up Alternative */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Active Users</div>
          <div className="flex items-center gap-1 text-blue-400 text-xs font-semibold bg-blue-500/20 px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>8.1%</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-slate-100 mb-1">18,492</div>
        <div className="text-slate-500 text-xs">+1,385 new users</div>
      </div>
    </div>
  );
}

export const stats5Code = `export default function Stats5Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Trend Up */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Sales</div>
          <div className="flex items-center gap-1 text-green-400 text-xs font-semibold bg-green-500/20 px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>12.5%</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-slate-100 mb-1">$54,239</div>
        <div className="text-slate-500 text-xs">+$6,024 from last month</div>
      </div>

      {/* Trend Down */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-red-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Bounce Rate</div>
          <div className="flex items-center gap-1 text-red-400 text-xs font-semibold bg-red-500/20 px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>3.2%</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-slate-100 mb-1">38.4%</div>
        <div className="text-slate-500 text-xs">-1.3% from last month</div>
      </div>

      {/* Trend Up Alternative */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Active Users</div>
          <div className="flex items-center gap-1 text-blue-400 text-xs font-semibold bg-blue-500/20 px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>8.1%</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-slate-100 mb-1">18,492</div>
        <div className="text-slate-500 text-xs">+1,385 new users</div>
      </div>
    </div>
  );
}`;
