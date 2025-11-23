export default function BadgeCSS2Example() {
  return (
    <>
      <style>{`
        @keyframes badge-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .badge-bounce-animation {
          animation: badge-bounce 1s ease-in-out infinite;
        }
      `}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full badge-bounce-animation">
        <span className="text-xs font-bold text-white">🔥 Hot</span>
      </div>
    </>
  );
}

export const badgecss2Code = `export default function BadgeCSS2Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .badge-bounce-animation {
          animation: badge-bounce 1s ease-in-out infinite;
        }
      \`}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full badge-bounce-animation">
        <span className="text-xs font-bold text-white">🔥 Hot</span>
      </div>
    </>
  );
}`;
