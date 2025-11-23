export default function Button17Example() {
  return (
    <button className="relative inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white font-medium rounded-full hover:bg-slate-600 transition-colors">
      Messages
      <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
        3
      </span>
    </button>
  );
}

export const button17Code = `export default function Button17Example() {
  return (
    <button className="relative inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white font-medium rounded-full hover:bg-slate-600 transition-colors">
      Messages
      <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
        3
      </span>
    </button>
  );
}`;
