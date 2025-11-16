export default function Stats15Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* KPI 1 - Revenue Target */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[320px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium mb-1">Monthly Revenue</div>
            <div className="text-3xl font-bold text-slate-100">$84,290</div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Target: $100,000</span>
            <span className="font-semibold text-green-400">84.3%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '84.3%' }}></div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-green-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-semibold">+12.5%</span>
          </div>
          <span>vs last month</span>
        </div>
      </div>

      {/* KPI 2 - Customer Acquisition */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[320px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium mb-1">New Customers</div>
            <div className="text-3xl font-bold text-slate-100">2,847</div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Target: 3,500</span>
            <span className="font-semibold text-yellow-400">81.3%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '81.3%' }}></div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-blue-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-semibold">+8.2%</span>
          </div>
          <span>vs last month</span>
        </div>
      </div>

      {/* KPI 3 - Satisfaction Score */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[320px] hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium mb-1">Customer Satisfaction</div>
            <div className="text-3xl font-bold text-slate-100">4.8/5.0</div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Target: 4.5/5.0</span>
            <span className="font-semibold text-green-400">106.7%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '96%' }}></div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-purple-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-semibold">+0.3</span>
          </div>
          <span>vs last month</span>
        </div>
      </div>
    </div>
  );
}

export const stats15Code = `export default function Stats15Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* KPI 1 - Revenue Target */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[320px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium mb-1">Monthly Revenue</div>
            <div className="text-3xl font-bold text-slate-100">$84,290</div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Target: $100,000</span>
            <span className="font-semibold text-green-400">84.3%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '84.3%' }}></div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-green-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-semibold">+12.5%</span>
          </div>
          <span>vs last month</span>
        </div>
      </div>

      {/* KPI 2 - Customer Acquisition */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[320px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium mb-1">New Customers</div>
            <div className="text-3xl font-bold text-slate-100">2,847</div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Target: 3,500</span>
            <span className="font-semibold text-yellow-400">81.3%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '81.3%' }}></div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-blue-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-semibold">+8.2%</span>
          </div>
          <span>vs last month</span>
        </div>
      </div>

      {/* KPI 3 - Satisfaction Score */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[320px] hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium mb-1">Customer Satisfaction</div>
            <div className="text-3xl font-bold text-slate-100">4.8/5.0</div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Target: 4.5/5.0</span>
            <span className="font-semibold text-green-400">106.7%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '96%' }}></div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-purple-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-semibold">+0.3</span>
          </div>
          <span>vs last month</span>
        </div>
      </div>
    </div>
  );
}`;
