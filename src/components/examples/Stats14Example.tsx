export default function Stats14Example() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Dashboard Tile 1 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-blue-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full">+12%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">24,583</div>
          <div className="text-slate-400 text-xs">Total Users</div>
        </div>

        {/* Dashboard Tile 2 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-green-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-green-400 bg-green-500/20 px-2 py-1 rounded-full">+8%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">$89.4K</div>
          <div className="text-slate-400 text-xs">Revenue</div>
        </div>

        {/* Dashboard Tile 3 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-purple-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">+24%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">3,847</div>
          <div className="text-slate-400 text-xs">Orders</div>
        </div>

        {/* Dashboard Tile 4 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-orange-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-orange-400 bg-orange-500/20 px-2 py-1 rounded-full">+16%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">94.3%</div>
          <div className="text-slate-400 text-xs">Conversion</div>
        </div>

        {/* Dashboard Tile 5 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-cyan-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">+5%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">142K</div>
          <div className="text-slate-400 text-xs">Page Views</div>
        </div>

        {/* Dashboard Tile 6 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-pink-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-red-400 bg-red-500/20 px-2 py-1 rounded-full">-2%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">4m 28s</div>
          <div className="text-slate-400 text-xs">Avg Session</div>
        </div>

        {/* Dashboard Tile 7 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-emerald-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">+98%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">99.2%</div>
          <div className="text-slate-400 text-xs">Success Rate</div>
        </div>

        {/* Dashboard Tile 8 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-violet-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-violet-400 bg-violet-500/20 px-2 py-1 rounded-full">Live</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">1,247</div>
          <div className="text-slate-400 text-xs">Active Now</div>
        </div>
      </div>
    </div>
  );
}

export const stats14Code = `export default function Stats14Example() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Dashboard Tile 1 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-blue-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full">+12%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">24,583</div>
          <div className="text-slate-400 text-xs">Total Users</div>
        </div>

        {/* Dashboard Tile 2 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-green-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-green-400 bg-green-500/20 px-2 py-1 rounded-full">+8%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">$89.4K</div>
          <div className="text-slate-400 text-xs">Revenue</div>
        </div>

        {/* Dashboard Tile 3 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-purple-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">+24%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">3,847</div>
          <div className="text-slate-400 text-xs">Orders</div>
        </div>

        {/* Dashboard Tile 4 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-orange-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-orange-400 bg-orange-500/20 px-2 py-1 rounded-full">+16%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">94.3%</div>
          <div className="text-slate-400 text-xs">Conversion</div>
        </div>

        {/* Dashboard Tile 5 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-cyan-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">+5%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">142K</div>
          <div className="text-slate-400 text-xs">Page Views</div>
        </div>

        {/* Dashboard Tile 6 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-pink-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-red-400 bg-red-500/20 px-2 py-1 rounded-full">-2%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">4m 28s</div>
          <div className="text-slate-400 text-xs">Avg Session</div>
        </div>

        {/* Dashboard Tile 7 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-emerald-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">+98%</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">99.2%</div>
          <div className="text-slate-400 text-xs">Success Rate</div>
        </div>

        {/* Dashboard Tile 8 */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-5 hover:border-violet-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <div className="text-xs font-semibold text-violet-400 bg-violet-500/20 px-2 py-1 rounded-full">Live</div>
          </div>
          <div className="text-2xl font-bold text-slate-100 mb-1">1,247</div>
          <div className="text-slate-400 text-xs">Active Now</div>
        </div>
      </div>
    </div>
  );
}`;
