import { useState } from 'react';

export default function Input3Example() {
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="relative">
        <input
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          onFocus={() => setFocused1(true)}
          onBlur={() => setFocused1(false)}
          className="w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 peer"
          placeholder=" "
        />
        <label
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            focused1 || value1
              ? 'top-2 text-xs text-blue-400'
              : 'top-4 text-sm text-slate-500'
          }`}
        >
          Full Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          onFocus={() => setFocused2(true)}
          onBlur={() => setFocused2(false)}
          className="w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 peer"
          placeholder=" "
        />
        <label
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            focused2 || value2
              ? 'top-2 text-xs text-blue-400'
              : 'top-4 text-sm text-slate-500'
          }`}
        >
          Email Address
        </label>
      </div>
    </div>
  );
}

export const input3Code = `import { useState } from 'react';

export default function Input3Example() {
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="relative">
        <input
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          onFocus={() => setFocused1(true)}
          onBlur={() => setFocused1(false)}
          className="w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 peer"
          placeholder=" "
        />
        <label
          className={\`absolute left-4 transition-all duration-200 pointer-events-none \${
            focused1 || value1
              ? 'top-2 text-xs text-blue-400'
              : 'top-4 text-sm text-slate-500'
          }\`}
        >
          Full Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          onFocus={() => setFocused2(true)}
          onBlur={() => setFocused2(false)}
          className="w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 peer"
          placeholder=" "
        />
        <label
          className={\`absolute left-4 transition-all duration-200 pointer-events-none \${
            focused2 || value2
              ? 'top-2 text-xs text-blue-400'
              : 'top-4 text-sm text-slate-500'
          }\`}
        >
          Email Address
        </label>
      </div>
    </div>
  );
}`;
