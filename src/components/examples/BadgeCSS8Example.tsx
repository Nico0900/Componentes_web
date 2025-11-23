export default function BadgeCSS8Example() {
  return (
    <>
      <style>{`
        @keyframes badge-flip {
          0%, 100% { transform: rotateY(0); }
          50% { transform: rotateY(180deg); }
        }
        .badge-flip-animation {
          animation: badge-flip 2s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>
      <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-md shadow-md badge-flip-animation">
        <span className="text-xs font-bold text-white">💎 Premium</span>
      </div>
    </>
  );
}

export const badgecss8Code = `export default function BadgeCSS8Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-flip {
          0%, 100% { transform: rotateY(0); }
          50% { transform: rotateY(180deg); }
        }
        .badge-flip-animation {
          animation: badge-flip 2s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      \`}</style>
      <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-md shadow-md badge-flip-animation">
        <span className="text-xs font-bold text-white">💎 Premium</span>
      </div>
    </>
  );
}`;
