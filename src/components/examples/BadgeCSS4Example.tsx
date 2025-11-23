export default function BadgeCSS4Example() {
  return (
    <>
      <style>{`
        @keyframes badge-pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .badge-pulse-scale-animation {
          animation: badge-pulse-scale 2s ease-in-out infinite;
        }
      `}</style>
      <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-yellow-400 rounded-lg shadow-lg badge-pulse-scale-animation">
        <span className="text-xs font-bold text-yellow-900">⭐ Recommended</span>
      </div>
    </>
  );
}

export const badgecss4Code = `export default function BadgeCSS4Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .badge-pulse-scale-animation {
          animation: badge-pulse-scale 2s ease-in-out infinite;
        }
      \`}</style>
      <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-yellow-400 rounded-lg shadow-lg badge-pulse-scale-animation">
        <span className="text-xs font-bold text-yellow-900">⭐ Recommended</span>
      </div>
    </>
  );
}`;
