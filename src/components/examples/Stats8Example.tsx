export default function Stats8Example() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 divide-y divide-slate-700/50">
        {/* Compact Row 1 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-slate-300 text-sm font-medium">Page Views</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">284,392</span>
        </div>

        {/* Compact Row 2 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-slate-300 text-sm font-medium">Unique Visitors</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">52,847</span>
        </div>

        {/* Compact Row 3 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <span className="text-slate-300 text-sm font-medium">Avg. Session</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">4m 28s</span>
        </div>

        {/* Compact Row 4 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <span className="text-slate-300 text-sm font-medium">Conversion</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">2.84%</span>
        </div>

        {/* Compact Row 5 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <span className="text-slate-300 text-sm font-medium">Total Orders</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">1,502</span>
        </div>
      </div>
    </div>
  );
}

export const stats8Code = `export default function Stats8Example() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 divide-y divide-slate-700/50">
        {/* Compact Row 1 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-slate-300 text-sm font-medium">Page Views</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">284,392</span>
        </div>

        {/* Compact Row 2 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-slate-300 text-sm font-medium">Unique Visitors</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">52,847</span>
        </div>

        {/* Compact Row 3 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <span className="text-slate-300 text-sm font-medium">Avg. Session</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">4m 28s</span>
        </div>

        {/* Compact Row 4 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <span className="text-slate-300 text-sm font-medium">Conversion</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">2.84%</span>
        </div>

        {/* Compact Row 5 */}
        <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <span className="text-slate-300 text-sm font-medium">Total Orders</span>
          </div>
          <span className="text-slate-100 text-lg font-bold">1,502</span>
        </div>
      </div>
    </div>
  );
}`;
