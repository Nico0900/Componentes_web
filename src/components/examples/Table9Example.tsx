import { useState } from 'react';

export default function Table9Example() {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      status: 'In Progress',
      progress: 75,
      team: 'Design Team',
      details: { budget: '$25,000', deadline: '2024-03-15', manager: 'Sarah Johnson', tasks: 24 }
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'Planning',
      progress: 20,
      team: 'Dev Team',
      details: { budget: '$50,000', deadline: '2024-06-30', manager: 'Mike Chen', tasks: 48 }
    },
    {
      id: 3,
      name: 'API Integration',
      status: 'Completed',
      progress: 100,
      team: 'Backend Team',
      details: { budget: '$15,000', deadline: '2024-01-20', manager: 'Emily Rodriguez', tasks: 16 }
    },
    {
      id: 4,
      name: 'Security Audit',
      status: 'In Progress',
      progress: 45,
      team: 'Security Team',
      details: { budget: '$20,000', deadline: '2024-04-10', manager: 'David Kim', tasks: 12 }
    },
  ];

  const toggleRow = (id: number) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider w-12"></th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Team</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <>
                  <tr key={project.id} className="border-t border-slate-700/30">
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => toggleRow(project.id)}
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        <svg className={`w-5 h-5 transition-transform ${expandedRows.includes(project.id) ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-200 font-medium">{project.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{project.team}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400'
                          : project.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              project.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-slate-400 text-xs">{project.progress}%</span>
                      </div>
                    </td>
                  </tr>
                  {expandedRows.includes(project.id) && (
                    <tr className="bg-slate-900/30">
                      <td></td>
                      <td colSpan={4} className="px-6 py-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <div className="text-xs text-slate-500 uppercase mb-1">Budget</div>
                            <div className="text-sm text-emerald-400 font-semibold">{project.details.budget}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 uppercase mb-1">Deadline</div>
                            <div className="text-sm text-slate-300">{project.details.deadline}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 uppercase mb-1">Manager</div>
                            <div className="text-sm text-slate-300">{project.details.manager}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 uppercase mb-1">Tasks</div>
                            <div className="text-sm text-slate-300">{project.details.tasks} tasks</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table9Code = `import { useState } from 'react';

export default function Table9Example() {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      status: 'In Progress',
      progress: 75,
      team: 'Design Team',
      details: { budget: '$25,000', deadline: '2024-03-15', manager: 'Sarah Johnson', tasks: 24 }
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'Planning',
      progress: 20,
      team: 'Dev Team',
      details: { budget: '$50,000', deadline: '2024-06-30', manager: 'Mike Chen', tasks: 48 }
    },
    {
      id: 3,
      name: 'API Integration',
      status: 'Completed',
      progress: 100,
      team: 'Backend Team',
      details: { budget: '$15,000', deadline: '2024-01-20', manager: 'Emily Rodriguez', tasks: 16 }
    },
    {
      id: 4,
      name: 'Security Audit',
      status: 'In Progress',
      progress: 45,
      team: 'Security Team',
      details: { budget: '$20,000', deadline: '2024-04-10', manager: 'David Kim', tasks: 12 }
    },
  ];

  const toggleRow = (id: number) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider w-12"></th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Team</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <>
                  <tr key={project.id} className="border-t border-slate-700/30">
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => toggleRow(project.id)}
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        <svg className={\`w-5 h-5 transition-transform \${expandedRows.includes(project.id) ? 'rotate-90' : ''}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-200 font-medium">{project.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{project.team}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${
                        project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400'
                          : project.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }\`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <div
                            className={\`h-full rounded-full \${
                              project.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                            }\`}
                            style={{ width: \`\${project.progress}%\` }}
                          />
                        </div>
                        <span className="text-slate-400 text-xs">{project.progress}%</span>
                      </div>
                    </td>
                  </tr>
                  {expandedRows.includes(project.id) && (
                    <tr className="bg-slate-900/30">
                      <td></td>
                      <td colSpan={4} className="px-6 py-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <div className="text-xs text-slate-500 uppercase mb-1">Budget</div>
                            <div className="text-sm text-emerald-400 font-semibold">{project.details.budget}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 uppercase mb-1">Deadline</div>
                            <div className="text-sm text-slate-300">{project.details.deadline}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 uppercase mb-1">Manager</div>
                            <div className="text-sm text-slate-300">{project.details.manager}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 uppercase mb-1">Tasks</div>
                            <div className="text-sm text-slate-300">{project.details.tasks} tasks</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
