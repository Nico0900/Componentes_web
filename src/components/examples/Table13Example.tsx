export default function Table13Example() {
  const sales = [
    { id: 1, product: 'Laptop Pro', quantity: 45, unitPrice: 1299.99, total: 58499.55 },
    { id: 2, product: 'Wireless Mouse', quantity: 234, unitPrice: 29.99, total: 7017.66 },
    { id: 3, product: 'USB-C Cable', quantity: 567, unitPrice: 12.99, total: 7365.33 },
    { id: 4, product: 'Monitor 27"', quantity: 89, unitPrice: 449.99, total: 40049.11 },
    { id: 5, product: 'Keyboard', quantity: 123, unitPrice: 159.99, total: 19678.77 },
  ];

  const totalQuantity = sales.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = sales.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-300 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-300 uppercase tracking-wider">Unit Price</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-300 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((item) => (
                <tr key={item.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{item.product}</td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-right">{item.quantity}</td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-right">${item.unitPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold text-right">${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-600/50 bg-slate-900/50">
                <td className="px-6 py-4 text-sm text-slate-100 font-bold">TOTAL</td>
                <td className="px-6 py-4 text-sm text-slate-100 font-bold text-right">{totalQuantity}</td>
                <td className="px-6 py-4 text-sm text-slate-400 text-right">-</td>
                <td className="px-6 py-4 text-sm text-emerald-400 font-bold text-right">${totalAmount.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table13Code = `export default function Table13Example() {
  const sales = [
    { id: 1, product: 'Laptop Pro', quantity: 45, unitPrice: 1299.99, total: 58499.55 },
    { id: 2, product: 'Wireless Mouse', quantity: 234, unitPrice: 29.99, total: 7017.66 },
    { id: 3, product: 'USB-C Cable', quantity: 567, unitPrice: 12.99, total: 7365.33 },
    { id: 4, product: 'Monitor 27"', quantity: 89, unitPrice: 449.99, total: 40049.11 },
    { id: 5, product: 'Keyboard', quantity: 123, unitPrice: 159.99, total: 19678.77 },
  ];

  const totalQuantity = sales.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = sales.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-300 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-300 uppercase tracking-wider">Unit Price</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-300 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((item) => (
                <tr key={item.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{item.product}</td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-right">{item.quantity}</td>
                  <td className="px-6 py-4 text-sm text-slate-300 text-right">\${item.unitPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold text-right">\${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-600/50 bg-slate-900/50">
                <td className="px-6 py-4 text-sm text-slate-100 font-bold">TOTAL</td>
                <td className="px-6 py-4 text-sm text-slate-100 font-bold text-right">{totalQuantity}</td>
                <td className="px-6 py-4 text-sm text-slate-400 text-right">-</td>
                <td className="px-6 py-4 text-sm text-emerald-400 font-bold text-right">\${totalAmount.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}`;
