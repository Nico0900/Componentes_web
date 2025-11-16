export default function Badge2Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <span className="px-3 py-1 bg-transparent border border-blue-500 text-blue-400 text-xs font-semibold rounded-full">
        Primary
      </span>
      <span className="px-3 py-1 bg-transparent border border-green-500 text-green-400 text-xs font-semibold rounded-full">
        Success
      </span>
      <span className="px-3 py-1 bg-transparent border border-yellow-500 text-yellow-400 text-xs font-semibold rounded-full">
        Warning
      </span>
      <span className="px-3 py-1 bg-transparent border border-red-500 text-red-400 text-xs font-semibold rounded-full">
        Danger
      </span>
      <span className="px-3 py-1 bg-transparent border border-purple-500 text-purple-400 text-xs font-semibold rounded-full">
        Info
      </span>
      <span className="px-3 py-1 bg-transparent border border-slate-500 text-slate-400 text-xs font-semibold rounded-full">
        Default
      </span>
    </div>
  );
}

export const badge2Code = `export default function Badge2Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <span className="px-3 py-1 bg-transparent border border-blue-500 text-blue-400 text-xs font-semibold rounded-full">
        Primary
      </span>
      <span className="px-3 py-1 bg-transparent border border-green-500 text-green-400 text-xs font-semibold rounded-full">
        Success
      </span>
      <span className="px-3 py-1 bg-transparent border border-yellow-500 text-yellow-400 text-xs font-semibold rounded-full">
        Warning
      </span>
      <span className="px-3 py-1 bg-transparent border border-red-500 text-red-400 text-xs font-semibold rounded-full">
        Danger
      </span>
      <span className="px-3 py-1 bg-transparent border border-purple-500 text-purple-400 text-xs font-semibold rounded-full">
        Info
      </span>
      <span className="px-3 py-1 bg-transparent border border-slate-500 text-slate-400 text-xs font-semibold rounded-full">
        Default
      </span>
    </div>
  );
}`;
