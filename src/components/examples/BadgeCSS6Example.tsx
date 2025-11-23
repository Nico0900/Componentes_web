export default function BadgeCSS6Example() {
  return (
    <>
      <style>{`
        @keyframes badge-slide-in {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .badge-slide-in-animation {
          animation: badge-slide-in 0.5s ease-out;
        }
      `}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-lg badge-slide-in-animation">
        <span className="text-xs font-semibold text-indigo-400">📌 Pinned</span>
      </div>
    </>
  );
}

export const badgecss6Code = `export default function BadgeCSS6Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-slide-in {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .badge-slide-in-animation {
          animation: badge-slide-in 0.5s ease-out;
        }
      \`}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-lg badge-slide-in-animation">
        <span className="text-xs font-semibold text-indigo-400">📌 Pinned</span>
      </div>
    </>
  );
}`;
