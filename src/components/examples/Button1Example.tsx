export default function Button1Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
        Primary
      </button>
      <button className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200">
        Secondary
      </button>
      <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200">
        Success
      </button>
      <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200">
        Danger
      </button>
    </div>
  );
}

export const button1Code = `export default function Button1Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
        Primary
      </button>
      <button className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200">
        Secondary
      </button>
      <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200">
        Success
      </button>
      <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200">
        Danger
      </button>
    </div>
  );
}`;
