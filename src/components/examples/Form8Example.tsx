import { useState } from 'react';

export default function Form8Example() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'username':
        if (!value.trim()) error = 'Username is required';
        else if (value.length < 3) error = 'Username must be at least 3 characters';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 8) error = 'Password must be at least 8 characters';
        else if (!/(?=.*[a-z])/.test(value)) error = 'Must contain lowercase letter';
        else if (!/(?=.*[A-Z])/.test(value)) error = 'Must contain uppercase letter';
        else if (!/(?=.*\d)/.test(value)) error = 'Must contain a number';
        break;
      case 'confirmPassword':
        if (value !== formData.password) error = 'Passwords must match';
        break;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    const hasErrors = Object.values(errors).some(error => error !== '');
    if (!hasErrors) {
      console.log('Validation form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  const getFieldState = (name: string) => {
    if (!touched[name]) return '';
    return errors[name] ? 'error' : 'success';
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-md p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Form Validation</h2>
          <p className="text-slate-400 text-sm">Real-time validation with error messages</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-2">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              onBlur={() => handleBlur('username')}
              className={`w-full px-4 py-2.5 bg-slate-800/50 border rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none transition-all duration-300 ${
                getFieldState('username') === 'error'
                  ? 'border-red-500/50 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20'
                  : getFieldState('username') === 'success'
                  ? 'border-green-500/50 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20'
                  : 'border-slate-700/50 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20'
              }`}
              placeholder="johndoe"
            />
            {touched.username && errors.username && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errors.username}
              </p>
            )}
            {touched.username && !errors.username && formData.username && (
              <p className="mt-1 text-sm text-green-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Looks good!
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-2.5 bg-slate-800/50 border rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none transition-all duration-300 ${
                getFieldState('email') === 'error'
                  ? 'border-red-500/50 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20'
                  : getFieldState('email') === 'success'
                  ? 'border-green-500/50 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20'
                  : 'border-slate-700/50 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20'
              }`}
              placeholder="john@example.com"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errors.email}
              </p>
            )}
            {touched.email && !errors.email && formData.email && (
              <p className="mt-1 text-sm text-green-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Looks good!
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password-form8" className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <input
              id="password-form8"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => handleBlur('password')}
              className={`w-full px-4 py-2.5 bg-slate-800/50 border rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none transition-all duration-300 ${
                getFieldState('password') === 'error'
                  ? 'border-red-500/50 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20'
                  : getFieldState('password') === 'success'
                  ? 'border-green-500/50 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20'
                  : 'border-slate-700/50 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20'
              }`}
              placeholder="Enter password"
            />
            {touched.password && errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password}</p>
            )}
            {formData.password && !errors.password && (
              <p className="mt-1 text-xs text-green-400">Strong password!</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={() => handleBlur('confirmPassword')}
              className={`w-full px-4 py-2.5 bg-slate-800/50 border rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none transition-all duration-300 ${
                getFieldState('confirmPassword') === 'error'
                  ? 'border-red-500/50 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20'
                  : getFieldState('confirmPassword') === 'success'
                  ? 'border-green-500/50 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20'
                  : 'border-slate-700/50 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20'
              }`}
              placeholder="Confirm password"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export const form8Code = `import { useState } from 'react';

export default function Form8Example() {
  // Form with validation states and real-time error messages
}`;
