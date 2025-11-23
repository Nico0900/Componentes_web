export default function BadgeCSS3Example() {
  return (
    <>
      <style>{`
        @keyframes badge-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .badge-shimmer-animation {
          background: linear-gradient(90deg, #6366f1 25%, #8b5cf6 50%, #6366f1 75%);
          background-size: 200% 100%;
          animation: badge-shimmer 3s linear infinite;
        }
      `}</style>
      <div className="inline-flex items-center px-3 py-1.5 rounded-md badge-shimmer-animation">
        <span className="text-xs font-bold text-white uppercase tracking-wide">VIP</span>
      </div>
    </>
  );
}

export const badgecss3Code = `export default function BadgeCSS3Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .badge-shimmer-animation {
          background: linear-gradient(90deg, #6366f1 25%, #8b5cf6 50%, #6366f1 75%);
          background-size: 200% 100%;
          animation: badge-shimmer 3s linear infinite;
        }
      \`}</style>
      <div className="inline-flex items-center px-3 py-1.5 rounded-md badge-shimmer-animation">
        <span className="text-xs font-bold text-white uppercase tracking-wide">VIP</span>
      </div>
    </>
  );
}`;
