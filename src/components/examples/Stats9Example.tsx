export default function Stats9Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Success Colored */}
      <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-xl rounded-xl border border-green-500/30 p-6 min-w-[220px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-green-300 text-xs font-semibold uppercase tracking-wide">Success</span>
        </div>
        <div className="text-3xl font-bold text-green-100 mb-1">99.8%</div>
        <div className="text-green-300/70 text-sm">Uptime Status</div>
      </div>

      {/* Warning Colored */}
      <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-xl border border-yellow-500/30 p-6 min-w-[220px] hover:border-yellow-500/50 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
          <span className="text-yellow-300 text-xs font-semibold uppercase tracking-wide">Warning</span>
        </div>
        <div className="text-3xl font-bold text-yellow-100 mb-1">87.3%</div>
        <div className="text-yellow-300/70 text-sm">Memory Usage</div>
      </div>

      {/* Danger Colored */}
      <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-xl rounded-xl border border-red-500/30 p-6 min-w-[220px] hover:border-red-500/50 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
          <span className="text-red-300 text-xs font-semibold uppercase tracking-wide">Critical</span>
        </div>
        <div className="text-3xl font-bold text-red-100 mb-1">12</div>
        <div className="text-red-300/70 text-sm">Failed Requests</div>
      </div>

      {/* Info Colored */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-xl border border-blue-500/30 p-6 min-w-[220px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
          <span className="text-blue-300 text-xs font-semibold uppercase tracking-wide">Info</span>
        </div>
        <div className="text-3xl font-bold text-blue-100 mb-1">2,847</div>
        <div className="text-blue-300/70 text-sm">Active Connections</div>
      </div>
    </div>
  );
}

export const stats9Code = `export default function Stats9Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Success Colored */}
      <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-xl rounded-xl border border-green-500/30 p-6 min-w-[220px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-green-300 text-xs font-semibold uppercase tracking-wide">Success</span>
        </div>
        <div className="text-3xl font-bold text-green-100 mb-1">99.8%</div>
        <div className="text-green-300/70 text-sm">Uptime Status</div>
      </div>

      {/* Warning Colored */}
      <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-xl border border-yellow-500/30 p-6 min-w-[220px] hover:border-yellow-500/50 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
          <span className="text-yellow-300 text-xs font-semibold uppercase tracking-wide">Warning</span>
        </div>
        <div className="text-3xl font-bold text-yellow-100 mb-1">87.3%</div>
        <div className="text-yellow-300/70 text-sm">Memory Usage</div>
      </div>

      {/* Danger Colored */}
      <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-xl rounded-xl border border-red-500/30 p-6 min-w-[220px] hover:border-red-500/50 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
          <span className="text-red-300 text-xs font-semibold uppercase tracking-wide">Critical</span>
        </div>
        <div className="text-3xl font-bold text-red-100 mb-1">12</div>
        <div className="text-red-300/70 text-sm">Failed Requests</div>
      </div>

      {/* Info Colored */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-xl border border-blue-500/30 p-6 min-w-[220px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
          <span className="text-blue-300 text-xs font-semibold uppercase tracking-wide">Info</span>
        </div>
        <div className="text-3xl font-bold text-blue-100 mb-1">2,847</div>
        <div className="text-blue-300/70 text-sm">Active Connections</div>
      </div>
    </div>
  );
}`;
