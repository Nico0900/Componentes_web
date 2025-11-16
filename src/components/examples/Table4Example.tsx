export default function Table4Example() {
  const employees = [
    { id: 1, name: 'Emma Wilson', department: 'Engineering', position: 'Senior Developer', salary: 95000 },
    { id: 2, name: 'Liam Martinez', department: 'Marketing', position: 'Marketing Manager', salary: 78000 },
    { id: 3, name: 'Olivia Brown', department: 'Design', position: 'UI/UX Designer', salary: 72000 },
    { id: 4, name: 'Noah Davis', department: 'Engineering', position: 'DevOps Engineer', salary: 88000 },
    { id: 5, name: 'Ava Garcia', department: 'Sales', position: 'Sales Director', salary: 105000 },
    { id: 6, name: 'Ethan Rodriguez', department: 'HR', position: 'HR Specialist', salary: 62000 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Position</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-t border-slate-700/30 hover:bg-slate-700/30 transition-colors duration-200 cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{employee.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{employee.department}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{employee.position}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">
                    ${employee.salary.toLocaleString()}
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

export const table4Code = `export default function Table4Example() {
  const employees = [
    { id: 1, name: 'Emma Wilson', department: 'Engineering', position: 'Senior Developer', salary: 95000 },
    { id: 2, name: 'Liam Martinez', department: 'Marketing', position: 'Marketing Manager', salary: 78000 },
    { id: 3, name: 'Olivia Brown', department: 'Design', position: 'UI/UX Designer', salary: 72000 },
    { id: 4, name: 'Noah Davis', department: 'Engineering', position: 'DevOps Engineer', salary: 88000 },
    { id: 5, name: 'Ava Garcia', department: 'Sales', position: 'Sales Director', salary: 105000 },
    { id: 6, name: 'Ethan Rodriguez', department: 'HR', position: 'HR Specialist', salary: 62000 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Position</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-t border-slate-700/30 hover:bg-slate-700/30 transition-colors duration-200 cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-slate-200 font-medium">{employee.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{employee.department}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{employee.position}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">
                    \${employee.salary.toLocaleString()}
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
