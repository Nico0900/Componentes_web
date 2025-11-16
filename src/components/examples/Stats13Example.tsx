export default function Stats13Example() {
  const chartData1 = [40, 55, 45, 60, 50, 70, 65];
  const chartData2 = [30, 45, 35, 50, 55, 48, 60];
  const max1 = Math.max(...chartData1);
  const max2 = Math.max(...chartData2);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Chart Stat 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[300px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium">Weekly Sales</div>
            <div className="text-3xl font-bold text-slate-100 mt-1">$34,259</div>
          </div>
          <div className="text-green-400 text-sm font-semibold">+12.5%</div>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {chartData1.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: `${(value / max1) * 100}%` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>

      {/* Chart Stat 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[300px] hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium">Traffic</div>
            <div className="text-3xl font-bold text-slate-100 mt-1">48,392</div>
          </div>
          <div className="text-purple-400 text-sm font-semibold">+8.2%</div>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {chartData2.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: `${(value / max2) * 100}%` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>

      {/* Line Chart Stat */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[300px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium">Growth</div>
            <div className="text-3xl font-bold text-slate-100 mt-1">+24.5%</div>
          </div>
          <div className="text-green-400 text-sm font-semibold">Trending</div>
        </div>
        <svg className="w-full h-16" viewBox="0 0 200 50" preserveAspectRatio="none">
          <polyline
            points="0,40 30,35 60,25 90,30 120,20 150,15 180,10 200,5"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <polyline
            points="0,40 30,35 60,25 90,30 120,20 150,15 180,10 200,5 200,50 0,50"
            fill="url(#gradientFill)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>Jan</span>
          <span>Jul</span>
        </div>
      </div>
    </div>
  );
}

export const stats13Code = `export default function Stats13Example() {
  const chartData1 = [40, 55, 45, 60, 50, 70, 65];
  const chartData2 = [30, 45, 35, 50, 55, 48, 60];
  const max1 = Math.max(...chartData1);
  const max2 = Math.max(...chartData2);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Chart Stat 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[300px] hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium">Weekly Sales</div>
            <div className="text-3xl font-bold text-slate-100 mt-1">$34,259</div>
          </div>
          <div className="text-green-400 text-sm font-semibold">+12.5%</div>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {chartData1.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: \`\${(value / max1) * 100}%\` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>

      {/* Chart Stat 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[300px] hover:border-purple-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium">Traffic</div>
            <div className="text-3xl font-bold text-slate-100 mt-1">48,392</div>
          </div>
          <div className="text-purple-400 text-sm font-semibold">+8.2%</div>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {chartData2.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: \`\${(value / max2) * 100}%\` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>

      {/* Line Chart Stat */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[300px] hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-slate-400 text-sm font-medium">Growth</div>
            <div className="text-3xl font-bold text-slate-100 mt-1">+24.5%</div>
          </div>
          <div className="text-green-400 text-sm font-semibold">Trending</div>
        </div>
        <svg className="w-full h-16" viewBox="0 0 200 50" preserveAspectRatio="none">
          <polyline
            points="0,40 30,35 60,25 90,30 120,20 150,15 180,10 200,5"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <polyline
            points="0,40 30,35 60,25 90,30 120,20 150,15 180,10 200,5 200,50 0,50"
            fill="url(#gradientFill)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>Jan</span>
          <span>Jul</span>
        </div>
      </div>
    </div>
  );
}`;
