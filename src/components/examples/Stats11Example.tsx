import { useState, useEffect } from 'react';

export default function Stats11Example() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = [24583, 8492, 94.3];
    const increments = targets.map(target => target / steps);

    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step <= steps) {
        setCount1(Math.floor(increments[0] * step));
        setCount2(Math.floor(increments[1] * step));
        setCount3(parseFloat((increments[2] * step).toFixed(1)));
      } else {
        clearInterval(timer);
        setCount1(targets[0]);
        setCount2(targets[1]);
        setCount3(targets[2]);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Animated Counter 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] text-center hover:border-blue-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-3">Total Users</div>
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
          {count1.toLocaleString()}
        </div>
        <div className="text-slate-500 text-xs">Live counter</div>
      </div>

      {/* Animated Counter 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] text-center hover:border-green-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-3">New Signups</div>
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
          {count2.toLocaleString()}
        </div>
        <div className="text-slate-500 text-xs">This month</div>
      </div>

      {/* Animated Counter 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] text-center hover:border-orange-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-3">Satisfaction</div>
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-2">
          {count3.toFixed(1)}%
        </div>
        <div className="text-slate-500 text-xs">Customer rating</div>
      </div>
    </div>
  );
}

export const stats11Code = `import { useState, useEffect } from 'react';

export default function Stats11Example() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = [24583, 8492, 94.3];
    const increments = targets.map(target => target / steps);

    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step <= steps) {
        setCount1(Math.floor(increments[0] * step));
        setCount2(Math.floor(increments[1] * step));
        setCount3(parseFloat((increments[2] * step).toFixed(1)));
      } else {
        clearInterval(timer);
        setCount1(targets[0]);
        setCount2(targets[1]);
        setCount3(targets[2]);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Animated Counter 1 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] text-center hover:border-blue-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-3">Total Users</div>
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
          {count1.toLocaleString()}
        </div>
        <div className="text-slate-500 text-xs">Live counter</div>
      </div>

      {/* Animated Counter 2 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] text-center hover:border-green-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-3">New Signups</div>
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
          {count2.toLocaleString()}
        </div>
        <div className="text-slate-500 text-xs">This month</div>
      </div>

      {/* Animated Counter 3 */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 min-w-[240px] text-center hover:border-orange-500/50 transition-all duration-300">
        <div className="text-slate-400 text-sm font-medium mb-3">Satisfaction</div>
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-2">
          {count3.toFixed(1)}%
        </div>
        <div className="text-slate-500 text-xs">Customer rating</div>
      </div>
    </div>
  );
}`;
