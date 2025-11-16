export default function Stats6Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Progress Stat 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Storage Used</div>
          <div className="text-slate-100 text-lg font-bold">68%</div>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
        </div>
        <div className="text-slate-500 text-xs mt-2">6.8 GB of 10 GB</div>
      </div>

      {/* Progress Stat 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Project Progress</div>
          <div className="text-slate-100 text-lg font-bold">85%</div>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
        </div>
        <div className="text-slate-500 text-xs mt-2">17 of 20 tasks completed</div>
      </div>

      {/* Progress Stat 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Goal Achievement</div>
          <div className="text-slate-100 text-lg font-bold">42%</div>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
        </div>
        <div className="text-slate-500 text-xs mt-2">$42K of $100K target</div>
      </div>
    </div>
  );
}

export const stats6Code = `export default function Stats6Example() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Progress Stat 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Storage Used</div>
          <div className="text-slate-100 text-lg font-bold">68%</div>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
        </div>
        <div className="text-slate-500 text-xs mt-2">6.8 GB of 10 GB</div>
      </div>

      {/* Progress Stat 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Project Progress</div>
          <div className="text-slate-100 text-lg font-bold">85%</div>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
        </div>
        <div className="text-slate-500 text-xs mt-2">17 of 20 tasks completed</div>
      </div>

      {/* Progress Stat 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[280px] hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="text-slate-400 text-sm font-medium">Goal Achievement</div>
          <div className="text-slate-100 text-lg font-bold">42%</div>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
        </div>
        <div className="text-slate-500 text-xs mt-2">$42K of $100K target</div>
      </div>
    </div>
  );
}`;
