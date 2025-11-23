export default function BadgeCSS9Example() {
  return (
    <>
      <style>{`
        @keyframes badge-wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .badge-wiggle-animation {
          animation: badge-wiggle 0.5s ease-in-out infinite;
        }
      `}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500 rounded-lg shadow-lg badge-wiggle-animation">
        <span className="text-xs font-bold text-white uppercase">Sale 50%</span>
      </div>
    </>
  );
}

export const badgecss9Code = `export default function BadgeCSS9Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .badge-wiggle-animation {
          animation: badge-wiggle 0.5s ease-in-out infinite;
        }
      \`}</style>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500 rounded-lg shadow-lg badge-wiggle-animation">
        <span className="text-xs font-bold text-white uppercase">Sale 50%</span>
      </div>
    </>
  );
}`;
