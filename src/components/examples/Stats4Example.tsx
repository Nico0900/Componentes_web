export default function Stats4Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Large Icon Stat 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-8 min-w-[260px] text-center hover:border-blue-500/50 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 mb-4">
          <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div className="text-4xl font-bold text-slate-100 mb-2">+24.5%</div>
        <div className="text-slate-400 text-sm font-medium">Growth Rate</div>
        <div className="text-slate-500 text-xs mt-1">vs last quarter</div>
      </div>

      {/* Large Icon Stat 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-8 min-w-[260px] text-center hover:border-green-500/50 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-4">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-4xl font-bold text-slate-100 mb-2">98.2%</div>
        <div className="text-slate-400 text-sm font-medium">Success Rate</div>
        <div className="text-slate-500 text-xs mt-1">Last 30 days</div>
      </div>

      {/* Large Icon Stat 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-8 min-w-[260px] text-center hover:border-orange-500/50 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/20 mb-4">
          <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
        </div>
        <div className="text-4xl font-bold text-slate-100 mb-2">1,247</div>
        <div className="text-slate-400 text-sm font-medium">Active Sessions</div>
        <div className="text-slate-500 text-xs mt-1">Currently online</div>
      </div>
    </div>
  );
}

export const stats4Code = `export default function Stats4Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Large Icon Stat 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-8 min-w-[260px] text-center hover:border-blue-500/50 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 mb-4">
          <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div className="text-4xl font-bold text-slate-100 mb-2">+24.5%</div>
        <div className="text-slate-400 text-sm font-medium">Growth Rate</div>
        <div className="text-slate-500 text-xs mt-1">vs last quarter</div>
      </div>

      {/* Large Icon Stat 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-8 min-w-[260px] text-center hover:border-green-500/50 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-4">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-4xl font-bold text-slate-100 mb-2">98.2%</div>
        <div className="text-slate-400 text-sm font-medium">Success Rate</div>
        <div className="text-slate-500 text-xs mt-1">Last 30 days</div>
      </div>

      {/* Large Icon Stat 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-8 min-w-[260px] text-center hover:border-orange-500/50 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/20 mb-4">
          <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
        </div>
        <div className="text-4xl font-bold text-slate-100 mb-2">1,247</div>
        <div className="text-slate-400 text-sm font-medium">Active Sessions</div>
        <div className="text-slate-500 text-xs mt-1">Currently online</div>
      </div>
    </div>
  );
}`;
