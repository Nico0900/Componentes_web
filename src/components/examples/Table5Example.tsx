import { useState } from 'react';

type SortKey = 'name' | 'email' | 'score' | 'joined';
type SortDirection = 'asc' | 'desc';

export default function Table5Example() {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const students = [
    { id: 1, name: 'Alice Cooper', email: 'alice.c@school.edu', score: 92, joined: '2023-09-01' },
    { id: 2, name: 'Bob Taylor', email: 'bob.t@school.edu', score: 87, joined: '2023-09-05' },
    { id: 3, name: 'Charlie Evans', email: 'charlie.e@school.edu', score: 95, joined: '2023-09-02' },
    { id: 4, name: 'Diana Prince', email: 'diana.p@school.edu', score: 88, joined: '2023-09-03' },
    { id: 5, name: 'Evan Wright', email: 'evan.w@school.edu', score: 91, joined: '2023-09-04' },
  ];

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedStudents = [...students].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const modifier = sortDirection === 'asc' ? 1 : -1;

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal) * modifier;
    }
    return (aVal > bVal ? 1 : -1) * modifier;
  });

  const SortIcon = ({ active, direction }: { active: boolean; direction: SortDirection }) => (
    <svg className={`w-4 h-4 ml-1 transition-colors ${active ? 'text-blue-400' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {direction === 'asc' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      )}
    </svg>
  );

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th
                  onClick={() => handleSort('name')}
                  className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    Name
                    <SortIcon active={sortKey === 'name'} direction={sortDirection} />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('email')}
                  className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    Email
                    <SortIcon active={sortKey === 'email'} direction={sortDirection} />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('score')}
                  className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    Score
                    <SortIcon active={sortKey === 'score'} direction={sortDirection} />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('joined')}
                  className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    Joined
                    <SortIcon active={sortKey === 'joined'} direction={sortDirection} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map((student) => (
                <tr key={student.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{student.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      student.score >= 90
                        ? 'bg-green-500/20 text-green-400'
                        : student.score >= 80
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {student.score}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{student.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table5Code = `import { useState } from 'react';

type SortKey = 'name' | 'email' | 'score' | 'joined';
type SortDirection = 'asc' | 'desc';

export default function Table5Example() {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const students = [
    { id: 1, name: 'Alice Cooper', email: 'alice.c@school.edu', score: 92, joined: '2023-09-01' },
    { id: 2, name: 'Bob Taylor', email: 'bob.t@school.edu', score: 87, joined: '2023-09-05' },
    { id: 3, name: 'Charlie Evans', email: 'charlie.e@school.edu', score: 95, joined: '2023-09-02' },
    { id: 4, name: 'Diana Prince', email: 'diana.p@school.edu', score: 88, joined: '2023-09-03' },
    { id: 5, name: 'Evan Wright', email: 'evan.w@school.edu', score: 91, joined: '2023-09-04' },
  ];

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedStudents = [...students].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const modifier = sortDirection === 'asc' ? 1 : -1;

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal) * modifier;
    }
    return (aVal > bVal ? 1 : -1) * modifier;
  });

  const SortIcon = ({ active, direction }: { active: boolean; direction: SortDirection }) => (
    <svg className={\`w-4 h-4 ml-1 transition-colors \${active ? 'text-blue-400' : 'text-slate-500'}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {direction === 'asc' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      )}
    </svg>
  );

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th
                  onClick={() => handleSort('name')}
                  className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    Name
                    <SortIcon active={sortKey === 'name'} direction={sortDirection} />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('email')}
                  className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    Email
                    <SortIcon active={sortKey === 'email'} direction={sortDirection} />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('score')}
                  className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    Score
                    <SortIcon active={sortKey === 'score'} direction={sortDirection} />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('joined')}
                  className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center">
                    Joined
                    <SortIcon active={sortKey === 'joined'} direction={sortDirection} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map((student) => (
                <tr key={student.id} className="border-t border-slate-700/30">
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{student.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${
                      student.score >= 90
                        ? 'bg-green-500/20 text-green-400'
                        : student.score >= 80
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }\`}>
                      {student.score}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{student.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
