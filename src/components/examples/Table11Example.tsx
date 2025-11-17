import React from 'react';

export default function Table11Example() {
  const departments = [
    {
      id: 1,
      name: 'Engineering',
      headCount: 45,
      budget: '$2.5M',
      teams: [
        { id: 11, name: 'Frontend', members: 12, lead: 'Sarah Chen' },
        { id: 12, name: 'Backend', members: 18, lead: 'Mike Johnson' },
        { id: 13, name: 'DevOps', members: 8, lead: 'Alex Kumar' },
        { id: 14, name: 'QA', members: 7, lead: 'Emma Wilson' },
      ]
    },
    {
      id: 2,
      name: 'Product',
      headCount: 15,
      budget: '$900K',
      teams: [
        { id: 21, name: 'Product Management', members: 8, lead: 'David Park' },
        { id: 22, name: 'UX Research', members: 4, lead: 'Lisa Brown' },
        { id: 23, name: 'Design', members: 3, lead: 'James Lee' },
      ]
    },
    {
      id: 3,
      name: 'Sales',
      headCount: 25,
      budget: '$1.8M',
      teams: [
        { id: 31, name: 'Enterprise Sales', members: 12, lead: 'Robert Smith' },
        { id: 32, name: 'SMB Sales', members: 8, lead: 'Maria Garcia' },
        { id: 33, name: 'Sales Ops', members: 5, lead: 'Tom Anderson' },
      ]
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Head Count</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Budget</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <React.Fragment key={dept.id}>
                  <tr className="border-t border-slate-700/30 bg-slate-800/30">
                    <td className="px-6 py-4 text-sm text-slate-100 font-semibold">{dept.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{dept.headCount}</td>
                    <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">{dept.budget}</td>
                  </tr>
                  {dept.teams.map((team, idx) => (
                    <tr key={team.id} className={`border-t border-slate-700/30 ${idx === dept.teams.length - 1 ? 'border-b-2 border-slate-600/50' : ''}`}>
                      <td className="px-6 py-3 pl-12 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {team.name}
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm text-slate-400">{team.members} members</td>
                      <td className="px-6 py-3 text-sm text-slate-400">{team.lead}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table11Code = `export default function Table11Example() {
  const departments = [
    {
      id: 1,
      name: 'Engineering',
      headCount: 45,
      budget: '$2.5M',
      teams: [
        { id: 11, name: 'Frontend', members: 12, lead: 'Sarah Chen' },
        { id: 12, name: 'Backend', members: 18, lead: 'Mike Johnson' },
        { id: 13, name: 'DevOps', members: 8, lead: 'Alex Kumar' },
        { id: 14, name: 'QA', members: 7, lead: 'Emma Wilson' },
      ]
    },
    {
      id: 2,
      name: 'Product',
      headCount: 15,
      budget: '$900K',
      teams: [
        { id: 21, name: 'Product Management', members: 8, lead: 'David Park' },
        { id: 22, name: 'UX Research', members: 4, lead: 'Lisa Brown' },
        { id: 23, name: 'Design', members: 3, lead: 'James Lee' },
      ]
    },
    {
      id: 3,
      name: 'Sales',
      headCount: 25,
      budget: '$1.8M',
      teams: [
        { id: 31, name: 'Enterprise Sales', members: 12, lead: 'Robert Smith' },
        { id: 32, name: 'SMB Sales', members: 8, lead: 'Maria Garcia' },
        { id: 33, name: 'Sales Ops', members: 5, lead: 'Tom Anderson' },
      ]
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Head Count</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Budget</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <React.Fragment key={dept.id}>
                  <tr className="border-t border-slate-700/30 bg-slate-800/30">
                    <td className="px-6 py-4 text-sm text-slate-100 font-semibold">{dept.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{dept.headCount}</td>
                    <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">{dept.budget}</td>
                  </tr>
                  {dept.teams.map((team, idx) => (
                    <tr key={team.id} className={\`border-t border-slate-700/30 \${idx === dept.teams.length - 1 ? 'border-b-2 border-slate-600/50' : ''}\`}>
                      <td className="px-6 py-3 pl-12 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {team.name}
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm text-slate-400">{team.members} members</td>
                      <td className="px-6 py-3 text-sm text-slate-400">{team.lead}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
