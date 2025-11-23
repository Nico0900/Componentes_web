export default function BadgeCSS7Example() {
  return (
    <>
      <style>{`
        @keyframes badge-rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .badge-rainbow-animation {
          background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444);
          background-size: 200% 200%;
          animation: badge-rainbow 3s ease infinite;
        }
      `}</style>
      <div className="inline-flex items-center px-3 py-1.5 rounded-full badge-rainbow-animation">
        <span className="text-xs font-bold text-white uppercase">Limited Edition</span>
      </div>
    </>
  );
}

export const badgecss7Code = `export default function BadgeCSS7Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .badge-rainbow-animation {
          background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444);
          background-size: 200% 200%;
          animation: badge-rainbow 3s ease infinite;
        }
      \`}</style>
      <div className="inline-flex items-center px-3 py-1.5 rounded-full badge-rainbow-animation">
        <span className="text-xs font-bold text-white uppercase">Limited Edition</span>
      </div>
    </>
  );
}`;
