import { useState } from 'react';

export default function Form7Example() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Grid form:', formData);
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-4xl p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">User Information</h2>
          <p className="text-slate-400 text-sm">Grid-based layout for efficient data entry</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
                placeholder="John"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
                placeholder="Doe"
              />
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
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
              placeholder="Acme Inc."
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-slate-300 mb-2">
              Street Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
              placeholder="123 Main St"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-2">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
                placeholder="New York"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-slate-300 mb-2">
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
                placeholder="NY"
              />
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-slate-300 mb-2">
                ZIP Code
              </label>
              <input
                id="zip"
                name="zip"
                type="text"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
                placeholder="10001"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-2">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 transition-all duration-300"
                placeholder="USA"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-lime-600 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-lime-500/20"
            >
              Save Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export const form7Code = `import { useState } from 'react';

export default function Form7Example() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    company: '',
  });

  // Grid-based 2-column form layout
}`;
