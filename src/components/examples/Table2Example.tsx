export default function Table2Example() {
  const products = [
    { id: 1, product: 'Laptop Pro', category: 'Electronics', price: 1299.99, stock: 45, sku: 'LPT-001' },
    { id: 2, product: 'Wireless Mouse', category: 'Accessories', price: 29.99, stock: 234, sku: 'WMS-002' },
    { id: 3, product: 'USB-C Cable', category: 'Accessories', price: 12.99, stock: 567, sku: 'USC-003' },
    { id: 4, product: 'Monitor 27"', category: 'Electronics', price: 449.99, stock: 89, sku: 'MON-004' },
    { id: 5, product: 'Keyboard Mechanical', category: 'Accessories', price: 159.99, stock: 123, sku: 'KBD-005' },
    { id: 6, product: 'Webcam HD', category: 'Electronics', price: 79.99, stock: 201, sku: 'WBC-006' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`border-t border-slate-700/30 ${
                    index % 2 === 0 ? 'bg-slate-800/20' : 'bg-slate-900/20'
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">{product.sku}</td>
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{product.product}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      product.stock > 200
                        ? 'bg-green-500/20 text-green-400'
                        : product.stock > 100
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {product.stock} units
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table2Code = `export default function Table2Example() {
  const products = [
    { id: 1, product: 'Laptop Pro', category: 'Electronics', price: 1299.99, stock: 45, sku: 'LPT-001' },
    { id: 2, product: 'Wireless Mouse', category: 'Accessories', price: 29.99, stock: 234, sku: 'WMS-002' },
    { id: 3, product: 'USB-C Cable', category: 'Accessories', price: 12.99, stock: 567, sku: 'USC-003' },
    { id: 4, product: 'Monitor 27"', category: 'Electronics', price: 449.99, stock: 89, sku: 'MON-004' },
    { id: 5, product: 'Keyboard Mechanical', category: 'Accessories', price: 159.99, stock: 123, sku: 'KBD-005' },
    { id: 6, product: 'Webcam HD', category: 'Electronics', price: 79.99, stock: 201, sku: 'WBC-006' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className={\`border-t border-slate-700/30 \${
                    index % 2 === 0 ? 'bg-slate-800/20' : 'bg-slate-900/20'
                  }\`}
                >
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">{product.sku}</td>
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{product.product}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">\${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${
                      product.stock > 200
                        ? 'bg-green-500/20 text-green-400'
                        : product.stock > 100
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-orange-500/20 text-orange-400'
                    }\`}>
                      {product.stock} units
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
