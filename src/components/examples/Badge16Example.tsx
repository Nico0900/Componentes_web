export default function Badge16Example() {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex items-center justify-center px-3 py-1 bg-slate-900 rounded-full relative z-10">
        <span className="text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          NEW
        </span>
      </div>
    </div>
  );
}

export const badge16Code = `export default function Badge16Example() {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex items-center justify-center px-3 py-1 bg-slate-900 rounded-full relative z-10">
        <span className="text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          NEW
        </span>
      </div>
    </div>
  );
}`;
