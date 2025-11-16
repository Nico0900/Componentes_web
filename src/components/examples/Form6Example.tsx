import { useState } from 'react';

export default function Form6Example() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [focused, setFocused] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Floating labels form:', formData);
  };

  const isFloating = (name: string) => focused[name] || formData[name as keyof typeof formData];

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-md p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Floating Labels</h2>
          <p className="text-slate-400 text-sm">Elegant animated label inputs</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused(prev => ({ ...prev, name: true }))}
              onBlur={() => setFocused(prev => ({ ...prev, name: false }))}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFloating('name')
                  ? 'top-2 text-xs text-teal-400'
                  : 'top-4 text-sm text-slate-400'
              }`}
            >
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused(prev => ({ ...prev, email: true }))}
              onBlur={() => setFocused(prev => ({ ...prev, email: false }))}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFloating('email')
                  ? 'top-2 text-xs text-teal-400'
                  : 'top-4 text-sm text-slate-400'
              }`}
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocused(prev => ({ ...prev, password: true }))}
              onBlur={() => setFocused(prev => ({ ...prev, password: false }))}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFloating('password')
                  ? 'top-2 text-xs text-teal-400'
                  : 'top-4 text-sm text-slate-400'
              }`}
            >
              Password
            </label>
          </div>

          <div className="relative">
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocused(prev => ({ ...prev, phone: true }))}
              onBlur={() => setFocused(prev => ({ ...prev, phone: false }))}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFloating('phone')
                  ? 'top-2 text-xs text-teal-400'
                  : 'top-4 text-sm text-slate-400'
              }`}
            >
              Phone Number
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/20"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export const form6Code = `import { useState } from 'react';

export default function Form6Example() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  // Floating label inputs with animations
}`;
