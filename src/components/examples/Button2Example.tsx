export default function Button2Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <button className="px-6 py-2.5 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 font-medium rounded-lg transition-all duration-200">
        Primary
      </button>
      <button className="px-6 py-2.5 bg-transparent border-2 border-slate-600 hover:bg-slate-600/10 text-slate-400 hover:text-slate-300 font-medium rounded-lg transition-all duration-200">
        Secondary
      </button>
      <button className="px-6 py-2.5 bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-green-400 hover:text-green-300 font-medium rounded-lg transition-all duration-200">
        Success
      </button>
      <button className="px-6 py-2.5 bg-transparent border-2 border-red-500 hover:bg-red-500/10 text-red-400 hover:text-red-300 font-medium rounded-lg transition-all duration-200">
        Danger
      </button>
    </div>
  );
}

export const button2Code = `export default function Button2Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <button className="px-6 py-2.5 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 font-medium rounded-lg transition-all duration-200">
        Primary
      </button>
      <button className="px-6 py-2.5 bg-transparent border-2 border-slate-600 hover:bg-slate-600/10 text-slate-400 hover:text-slate-300 font-medium rounded-lg transition-all duration-200">
        Secondary
      </button>
      <button className="px-6 py-2.5 bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-green-400 hover:text-green-300 font-medium rounded-lg transition-all duration-200">
        Success
      </button>
      <button className="px-6 py-2.5 bg-transparent border-2 border-red-500 hover:bg-red-500/10 text-red-400 hover:text-red-300 font-medium rounded-lg transition-all duration-200">
        Danger
      </button>
    </div>
  );
}`;
