import { useState, useEffect } from 'react';

const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer' },
];

export default function Search9Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [liveResults, setLiveResults] = useState(sampleUsers);

  useEffect(() => {
    // Live search - updates immediately as you type
    if (searchQuery) {
      const filtered = sampleUsers.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setLiveResults(filtered);
    } else {
      setLiveResults(sampleUsers);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-3xl space-y-4">
        {/* Live Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Live search users..."
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <span className="text-xs text-slate-500">Live</span>
          </div>
        </div>

        {/* Live Results */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-slate-400 px-2">
            <span>{liveResults.length} user{liveResults.length !== 1 ? 's' : ''} found</span>
            {searchQuery && <span className="text-purple-400">Searching: {searchQuery}</span>}
          </div>

          {liveResults.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-slate-100 font-medium">{user.name}</h3>
                  <p className="text-sm text-slate-400">{user.email}</p>
                </div>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                  {user.role}
                </span>
              </div>
            </div>
          ))}

          {liveResults.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No users found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const search9Code = `import { useState, useEffect } from 'react';

const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer' },
];

export default function Search9Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [liveResults, setLiveResults] = useState(sampleUsers);

  useEffect(() => {
    // Live search - updates immediately as you type
    if (searchQuery) {
      const filtered = sampleUsers.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setLiveResults(filtered);
    } else {
      setLiveResults(sampleUsers);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-3xl space-y-4">
        {/* Live Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Live search users..."
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <span className="text-xs text-slate-500">Live</span>
          </div>
        </div>

        {/* Live Results */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-slate-400 px-2">
            <span>{liveResults.length} user{liveResults.length !== 1 ? 's' : ''} found</span>
            {searchQuery && <span className="text-purple-400">Searching: {searchQuery}</span>}
          </div>

          {liveResults.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-slate-100 font-medium">{user.name}</h3>
                  <p className="text-sm text-slate-400">{user.email}</p>
                </div>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                  {user.role}
                </span>
              </div>
            </div>
          ))}

          {liveResults.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No users found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`;
