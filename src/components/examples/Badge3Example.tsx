export default function Badge3Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <span className="flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        Online
      </span>
      <span className="flex items-center gap-2 px-3 py-1 bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Available
      </span>
      <span className="flex items-center gap-2 px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 text-yellow-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
        Away
      </span>
      <span className="flex items-center gap-2 px-3 py-1 bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-red-400 rounded-full" />
        Busy
      </span>
      <span className="flex items-center gap-2 px-3 py-1 bg-slate-600/20 border border-slate-500/30 text-slate-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-slate-400 rounded-full" />
        Offline
      </span>
    </div>
  );
}

export const badge3Code = `export default function Badge3Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <span className="flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        Online
      </span>
      <span className="flex items-center gap-2 px-3 py-1 bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Available
      </span>
      <span className="flex items-center gap-2 px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 text-yellow-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
        Away
      </span>
      <span className="flex items-center gap-2 px-3 py-1 bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-red-400 rounded-full" />
        Busy
      </span>
      <span className="flex items-center gap-2 px-3 py-1 bg-slate-600/20 border border-slate-500/30 text-slate-300 text-xs font-semibold rounded-full">
        <span className="w-2 h-2 bg-slate-400 rounded-full" />
        Offline
      </span>
    </div>
  );
}`;
