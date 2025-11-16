import { useState } from 'react';

export default function Form12Example() {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    amount: '99.00',
    saveCard: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    if (name === 'cardNumber') {
      newValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    } else if (name === 'expiry') {
      newValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5);
    } else if (name === 'cvv') {
      newValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment:', formData);
    alert(`Processing payment of $${formData.amount}`);
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-lg p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Payment Details</h2>
          <p className="text-slate-400 text-sm">Complete your purchase securely</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="p-4 bg-slate-700/20 rounded-lg border border-slate-700/30">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Amount to pay</span>
              <span className="text-2xl font-bold text-slate-100">${formData.amount}</span>
            </div>
          </div>

          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-slate-300 mb-2">
              Cardholder Name
            </label>
            <input
              id="cardName"
              name="cardName"
              type="text"
              value={formData.cardName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-slate-300 mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                maxLength={19}
                className="w-full px-4 py-2.5 pr-12 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                placeholder="1234 5678 9012 3456"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="1" y="4" width="22" height="16" rx="2" strokeWidth="2"/>
                <path d="M1 10h22" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-slate-300 mb-2">
                Expiry Date
              </label>
              <input
                id="expiry"
                name="expiry"
                type="text"
                value={formData.expiry}
                onChange={handleChange}
                required
                placeholder="MM/YY"
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-slate-300 mb-2">
                CVV
              </label>
              <input
                id="cvv"
                name="cvv"
                type="text"
                value={formData.cvv}
                onChange={handleChange}
                required
                placeholder="123"
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="saveCard"
                checked={formData.saveCard}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-700 bg-slate-800/50 text-pink-600 focus:ring-2 focus:ring-pink-500/20"
              />
              <span className="ml-2 text-sm text-slate-300">Save card for future purchases</span>
            </label>
          </div>

          <div className="pt-4 border-t border-slate-700/50">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pay ${formData.amount}
            </button>
            <p className="text-xs text-center text-slate-500 mt-3">
              Your payment information is encrypted and secure
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export const form12Code = `import { useState } from 'react';

export default function Form12Example() {
  // Payment form with card details
}`;
