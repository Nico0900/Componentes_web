import { useState } from 'react';

export default function Table10Example() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const files = [
    { id: 1, name: 'presentation.pptx', type: 'Presentation', size: '4.2 MB', modified: '2024-01-20' },
    { id: 2, name: 'report.pdf', type: 'Document', size: '1.8 MB', modified: '2024-01-19' },
    { id: 3, name: 'data.xlsx', type: 'Spreadsheet', size: '856 KB', modified: '2024-01-18' },
    { id: 4, name: 'image.png', type: 'Image', size: '2.4 MB', modified: '2024-01-17' },
    { id: 5, name: 'video.mp4', type: 'Video', size: '24.5 MB', modified: '2024-01-16' },
  ];

  const toggleRow = (id: number) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedRows(prev =>
      prev.length === files.length ? [] : files.map(f => f.id)
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        {selectedRows.length > 0 && (
          <div className="px-6 py-3 bg-blue-500/20 border-b border-blue-500/30 flex items-center justify-between">
            <span className="text-sm text-blue-300">{selectedRows.length} file(s) selected</span>
            <button
              onClick={() => setSelectedRows([])}
              className="text-sm text-blue-300 hover:text-blue-100 transition-colors"
            >
              Clear selection
            </button>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left w-12">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === files.length}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-800 cursor-pointer"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Size</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Modified</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr
                  key={file.id}
                  className={`border-t border-slate-700/30 transition-colors ${
                    selectedRows.includes(file.id) ? 'bg-blue-500/10' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(file.id)}
                      onChange={() => toggleRow(file.id)}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-800 cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{file.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{file.type}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{file.size}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{file.modified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table10Code = `import { useState } from 'react';

export default function Table10Example() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const files = [
    { id: 1, name: 'presentation.pptx', type: 'Presentation', size: '4.2 MB', modified: '2024-01-20' },
    { id: 2, name: 'report.pdf', type: 'Document', size: '1.8 MB', modified: '2024-01-19' },
    { id: 3, name: 'data.xlsx', type: 'Spreadsheet', size: '856 KB', modified: '2024-01-18' },
    { id: 4, name: 'image.png', type: 'Image', size: '2.4 MB', modified: '2024-01-17' },
    { id: 5, name: 'video.mp4', type: 'Video', size: '24.5 MB', modified: '2024-01-16' },
  ];

  const toggleRow = (id: number) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedRows(prev =>
      prev.length === files.length ? [] : files.map(f => f.id)
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        {selectedRows.length > 0 && (
          <div className="px-6 py-3 bg-blue-500/20 border-b border-blue-500/30 flex items-center justify-between">
            <span className="text-sm text-blue-300">{selectedRows.length} file(s) selected</span>
            <button
              onClick={() => setSelectedRows([])}
              className="text-sm text-blue-300 hover:text-blue-100 transition-colors"
            >
              Clear selection
            </button>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left w-12">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === files.length}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-800 cursor-pointer"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Size</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Modified</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr
                  key={file.id}
                  className={\`border-t border-slate-700/30 transition-colors \${
                    selectedRows.includes(file.id) ? 'bg-blue-500/10' : ''
                  }\`}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(file.id)}
                      onChange={() => toggleRow(file.id)}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-800 cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{file.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{file.type}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{file.size}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{file.modified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
