import { useState } from 'react';

export default function Table14Example() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [data, setData] = useState([
    { id: 1, name: 'Alice Cooper', email: 'alice@company.com', role: 'Manager' },
    { id: 2, name: 'Bob Taylor', email: 'bob@company.com', role: 'Developer' },
    { id: 3, name: 'Carol White', email: 'carol@company.com', role: 'Designer' },
    { id: 4, name: 'David Lee', email: 'david@company.com', role: 'Developer' },
  ]);
  const [editData, setEditData] = useState({ name: '', email: '', role: '' });

  const startEdit = (item: typeof data[0]) => {
    setEditingId(item.id);
    setEditData({ name: item.name, email: item.email, role: item.role });
  };

  const saveEdit = (id: number) => {
    setData(data.map(item => item.id === id ? { ...item, ...editData } : item));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-t border-slate-700/30">
                  {editingId === item.id ? (
                    <>
                      <td className="px-6 py-3">
                        <input
                          type="text"
                          value={editData.name}
                          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                          className="w-full px-2 py-1 text-sm bg-slate-700 border border-slate-600 rounded text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                      </td>
                      <td className="px-6 py-3">
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                          className="w-full px-2 py-1 text-sm bg-slate-700 border border-slate-600 rounded text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                      </td>
                      <td className="px-6 py-3">
                        <input
                          type="text"
                          value={editData.role}
                          onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                          className="w-full px-2 py-1 text-sm bg-slate-700 border border-slate-600 rounded text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => saveEdit(item.id)}
                            className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white text-xs rounded transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white text-xs rounded transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 text-sm text-slate-200 font-medium">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-300">{item.email}</td>
                      <td className="px-6 py-4 text-sm text-slate-400">{item.role}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => startEdit(item)}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded transition-colors"
                        >
                          Edit
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table14Code = `import { useState } from 'react';

export default function Table14Example() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [data, setData] = useState([
    { id: 1, name: 'Alice Cooper', email: 'alice@company.com', role: 'Manager' },
    { id: 2, name: 'Bob Taylor', email: 'bob@company.com', role: 'Developer' },
    { id: 3, name: 'Carol White', email: 'carol@company.com', role: 'Designer' },
    { id: 4, name: 'David Lee', email: 'david@company.com', role: 'Developer' },
  ]);
  const [editData, setEditData] = useState({ name: '', email: '', role: '' });

  const startEdit = (item: typeof data[0]) => {
    setEditingId(item.id);
    setEditData({ name: item.name, email: item.email, role: item.role });
  };

  const saveEdit = (id: number) => {
    setData(data.map(item => item.id === id ? { ...item, ...editData } : item));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-t border-slate-700/30">
                  {editingId === item.id ? (
                    <>
                      <td className="px-6 py-3">
                        <input
                          type="text"
                          value={editData.name}
                          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                          className="w-full px-2 py-1 text-sm bg-slate-700 border border-slate-600 rounded text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                      </td>
                      <td className="px-6 py-3">
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                          className="w-full px-2 py-1 text-sm bg-slate-700 border border-slate-600 rounded text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                      </td>
                      <td className="px-6 py-3">
                        <input
                          type="text"
                          value={editData.role}
                          onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                          className="w-full px-2 py-1 text-sm bg-slate-700 border border-slate-600 rounded text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => saveEdit(item.id)}
                            className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white text-xs rounded transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white text-xs rounded transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 text-sm text-slate-200 font-medium">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-300">{item.email}</td>
                      <td className="px-6 py-4 text-sm text-slate-400">{item.role}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => startEdit(item)}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded transition-colors"
                        >
                          Edit
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
