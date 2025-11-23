export default function BadgeCSS1Example() {
  return (
    <>
      <style>{`
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.5), 0 0 10px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 10px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.5); }
        }
        .badge-glow-animation {
          animation: badge-glow 2s ease-in-out infinite;
        }
      `}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 rounded-lg badge-glow-animation">
        <span className="text-xs font-bold text-white uppercase">Active</span>
      </div>
    </>
  );
}

export const badgecss1Code = `export default function BadgeCSS1Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.5), 0 0 10px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 10px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.5); }
        }
        .badge-glow-animation {
          animation: badge-glow 2s ease-in-out infinite;
        }
      \`}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 rounded-lg badge-glow-animation">
        <span className="text-xs font-bold text-white uppercase">Active</span>
      </div>
    </>
  );
}`;
