export default function Stats3Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Users Card */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-medium">Total Users</div>
            <div className="text-3xl font-bold text-slate-100">45,923</div>
          </div>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-medium">Revenue</div>
            <div className="text-3xl font-bold text-slate-100">$128.4K</div>
          </div>
        </div>
      </div>

      {/* Downloads Card */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-medium">Downloads</div>
            <div className="text-3xl font-bold text-slate-100">89,264</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const stats3Code = `export default function Stats3Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Users Card */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-medium">Total Users</div>
            <div className="text-3xl font-bold text-slate-100">45,923</div>
          </div>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-medium">Revenue</div>
            <div className="text-3xl font-bold text-slate-100">$128.4K</div>
          </div>
        </div>
      </div>

      {/* Downloads Card */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-medium">Downloads</div>
            <div className="text-3xl font-bold text-slate-100">89,264</div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
