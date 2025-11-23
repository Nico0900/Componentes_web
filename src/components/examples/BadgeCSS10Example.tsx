export default function BadgeCSS10Example() {
  return (
    <>
      <style>{`
        @keyframes badge-border-pulse {
          0%, 100% { border-color: rgba(236, 72, 153, 0.3); }
          50% { border-color: rgba(236, 72, 153, 1); }
        }
        .badge-border-pulse-animation {
          animation: badge-border-pulse 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-500/10 border-2 rounded-full badge-border-pulse-animation">
        <span className="text-xs font-bold text-pink-400 uppercase">Special Offer</span>
      </div>
    </>
  );
}

export const badgecss10Code = `export default function BadgeCSS10Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-border-pulse {
          0%, 100% { border-color: rgba(236, 72, 153, 0.3); }
          50% { border-color: rgba(236, 72, 153, 1); }
        }
        .badge-border-pulse-animation {
          animation: badge-border-pulse 1.5s ease-in-out infinite;
        }
      \`}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-500/10 border-2 rounded-full badge-border-pulse-animation">
        <span className="text-xs font-bold text-pink-400 uppercase">Special Offer</span>
      </div>
    </>
  );
}`;
