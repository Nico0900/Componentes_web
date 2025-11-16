export default function Stats7Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Large Hero Stat 1 */}
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-12 min-w-[340px] text-center hover:border-blue-500/60 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium uppercase tracking-wide mb-4">Total Revenue</div>
        <div className="text-6xl font-bold text-slate-100 mb-4">$2.4M</div>
        <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+32.5% from last year</span>
        </div>
      </div>

      {/* Large Hero Stat 2 */}
      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl border border-green-500/30 p-12 min-w-[340px] text-center hover:border-green-500/60 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium uppercase tracking-wide mb-4">New Customers</div>
        <div className="text-6xl font-bold text-slate-100 mb-4">8,492</div>
        <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+18.2% this month</span>
        </div>
      </div>
    </div>
  );
}

export const stats7Code = `export default function Stats7Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Large Hero Stat 1 */}
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-12 min-w-[340px] text-center hover:border-blue-500/60 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium uppercase tracking-wide mb-4">Total Revenue</div>
        <div className="text-6xl font-bold text-slate-100 mb-4">$2.4M</div>
        <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+32.5% from last year</span>
        </div>
      </div>

      {/* Large Hero Stat 2 */}
      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl border border-green-500/30 p-12 min-w-[340px] text-center hover:border-green-500/60 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium uppercase tracking-wide mb-4">New Customers</div>
        <div className="text-6xl font-bold text-slate-100 mb-4">8,492</div>
        <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>+18.2% this month</span>
        </div>
      </div>
    </div>
  );
}`;
