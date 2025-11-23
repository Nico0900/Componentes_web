export default function Badge8Example() {
  return (
    <div className="relative inline-flex">
      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
        Messages
      </button>
      <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full border-2 border-slate-900">
        12
      </span>
    </div>
  );
}

export const badge8Code = `export default function Badge8Example() {
  return (
    <div className="relative inline-flex">
      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
        Messages
      </button>
      <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full border-2 border-slate-900">
        12
      </span>
    </div>
  );
}`;
