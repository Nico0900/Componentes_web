export default function Button10Example() {
  return (
    <div className="inline-flex rounded-lg overflow-hidden border border-slate-600">
      <button className="px-4 py-2 bg-slate-700 text-white hover:bg-slate-600 transition-colors border-r border-slate-600">
        Day
      </button>
      <button className="px-4 py-2 bg-slate-800 text-white hover:bg-slate-600 transition-colors border-r border-slate-600">
        Week
      </button>
      <button className="px-4 py-2 bg-slate-700 text-white hover:bg-slate-600 transition-colors">
        Month
      </button>
    </div>
  );
}

export const button10Code = `export default function Button10Example() {
  return (
    <div className="inline-flex rounded-lg overflow-hidden border border-slate-600">
      <button className="px-4 py-2 bg-slate-700 text-white hover:bg-slate-600 transition-colors border-r border-slate-600">
        Day
      </button>
      <button className="px-4 py-2 bg-slate-800 text-white hover:bg-slate-600 transition-colors border-r border-slate-600">
        Week
      </button>
      <button className="px-4 py-2 bg-slate-700 text-white hover:bg-slate-600 transition-colors">
        Month
      </button>
    </div>
  );
}`;
