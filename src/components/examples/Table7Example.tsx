import { useState } from 'react';

export default function Table7Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const transactions = [
    { id: 'TXN-001', type: 'Payment', description: 'Monthly Subscription', date: '2024-01-20', amount: 29.99, status: 'Completed' },
    { id: 'TXN-002', type: 'Refund', description: 'Product Return', date: '2024-01-19', amount: -49.99, status: 'Completed' },
    { id: 'TXN-003', type: 'Payment', description: 'One-time Purchase', date: '2024-01-18', amount: 129.99, status: 'Completed' },
    { id: 'TXN-004', type: 'Payment', description: 'Premium Plan', date: '2024-01-17', amount: 99.99, status: 'Pending' },
    { id: 'TXN-005', type: 'Payment', description: 'Add-on Service', date: '2024-01-16', amount: 19.99, status: 'Completed' },
    { id: 'TXN-006', type: 'Refund', description: 'Service Cancellation', date: '2024-01-15', amount: -79.99, status: 'Processing' },
    { id: 'TXN-007', type: 'Payment', description: 'Annual Subscription', date: '2024-01-14', amount: 299.99, status: 'Completed' },
    { id: 'TXN-008', type: 'Payment', description: 'Pro Features', date: '2024-01-13', amount: 49.99, status: 'Completed' },
    { id: 'TXN-009', type: 'Payment', description: 'Cloud Storage', date: '2024-01-12', amount: 9.99, status: 'Completed' },
    { id: 'TXN-010', type: 'Refund', description: 'Duplicate Charge', date: '2024-01-11', amount: -29.99, status: 'Completed' },
    { id: 'TXN-011', type: 'Payment', description: 'Team License', date: '2024-01-10', amount: 199.99, status: 'Completed' },
    { id: 'TXN-012', type: 'Payment', description: 'Support Package', date: '2024-01-09', amount: 149.99, status: 'Completed' },
  ];

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((txn) => (
                <tr key={txn.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-300 font-mono">{txn.id}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      txn.type === 'Payment' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {txn.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-200">{txn.description}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{txn.date}</td>
                  <td className={`px-6 py-4 text-sm font-semibold ${txn.amount < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                    ${Math.abs(txn.amount).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      txn.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400'
                        : txn.status === 'Pending'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-700/50 flex items-center justify-between">
          <div className="text-sm text-slate-400">
            Showing {startIndex + 1} to {Math.min(endIndex, transactions.length)} of {transactions.length} results
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const table7Code = `import { useState } from 'react';

export default function Table7Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const transactions = [
    { id: 'TXN-001', type: 'Payment', description: 'Monthly Subscription', date: '2024-01-20', amount: 29.99, status: 'Completed' },
    { id: 'TXN-002', type: 'Refund', description: 'Product Return', date: '2024-01-19', amount: -49.99, status: 'Completed' },
    { id: 'TXN-003', type: 'Payment', description: 'One-time Purchase', date: '2024-01-18', amount: 129.99, status: 'Completed' },
    { id: 'TXN-004', type: 'Payment', description: 'Premium Plan', date: '2024-01-17', amount: 99.99, status: 'Pending' },
    { id: 'TXN-005', type: 'Payment', description: 'Add-on Service', date: '2024-01-16', amount: 19.99, status: 'Completed' },
    { id: 'TXN-006', type: 'Refund', description: 'Service Cancellation', date: '2024-01-15', amount: -79.99, status: 'Processing' },
    { id: 'TXN-007', type: 'Payment', description: 'Annual Subscription', date: '2024-01-14', amount: 299.99, status: 'Completed' },
    { id: 'TXN-008', type: 'Payment', description: 'Pro Features', date: '2024-01-13', amount: 49.99, status: 'Completed' },
    { id: 'TXN-009', type: 'Payment', description: 'Cloud Storage', date: '2024-01-12', amount: 9.99, status: 'Completed' },
    { id: 'TXN-010', type: 'Refund', description: 'Duplicate Charge', date: '2024-01-11', amount: -29.99, status: 'Completed' },
    { id: 'TXN-011', type: 'Payment', description: 'Team License', date: '2024-01-10', amount: 199.99, status: 'Completed' },
    { id: 'TXN-012', type: 'Payment', description: 'Support Package', date: '2024-01-09', amount: 149.99, status: 'Completed' },
  ];

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((txn) => (
                <tr key={txn.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-300 font-mono">{txn.id}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${
                      txn.type === 'Payment' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'
                    }\`}>
                      {txn.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-200">{txn.description}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{txn.date}</td>
                  <td className={\`px-6 py-4 text-sm font-semibold \${txn.amount < 0 ? 'text-red-400' : 'text-emerald-400'}\`}>
                    \${Math.abs(txn.amount).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${
                      txn.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400'
                        : txn.status === 'Pending'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }\`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-700/50 flex items-center justify-between">
          <div className="text-sm text-slate-400">
            Showing {startIndex + 1} to {Math.min(endIndex, transactions.length)} of {transactions.length} results
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={\`px-4 py-2 rounded-lg transition-colors \${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                }\`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
