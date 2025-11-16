export default function Table1Example() {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Developer', status: 'Active' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Designer', status: 'Inactive' },
    { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Manager', status: 'Active' },
    { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Developer', status: 'Active' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-400">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{user.role}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-slate-500/20 text-slate-400'
                    }`}>
                      {user.status}
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

export const table1Code = `export default function Table1Example() {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Developer', status: 'Active' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Designer', status: 'Inactive' },
    { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Manager', status: 'Active' },
    { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Developer', status: 'Active' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-400">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{user.role}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${
                      user.status === 'Active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-slate-500/20 text-slate-400'
                    }\`}>
                      {user.status}
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
