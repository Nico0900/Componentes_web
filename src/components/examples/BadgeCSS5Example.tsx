export default function BadgeCSS5Example() {
  return (
    <>
      <style>{`
        @keyframes badge-rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .badge-rotate-wrapper {
          position: relative;
          padding: 2px;
          border-radius: 9999px;
        }
        .badge-rotate-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 2px;
          background: conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: badge-rotate-border 3s linear infinite;
        }
      `}</style>
      <div className="badge-rotate-wrapper inline-flex">
        <div className="inline-flex items-center px-3 py-1 bg-slate-900 rounded-full relative z-10">
          <span className="text-xs font-bold text-cyan-400 uppercase">Exclusive</span>
        </div>
      </div>
    </>
  );
}

export const badgecss5Code = `export default function BadgeCSS5Example() {
  return (
    <>
      <style>{\`
        @keyframes badge-rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .badge-rotate-wrapper {
          position: relative;
          padding: 2px;
          border-radius: 9999px;
        }
        .badge-rotate-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 2px;
          background: conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: badge-rotate-border 3s linear infinite;
        }
      \`}</style>
      <div className="badge-rotate-wrapper inline-flex">
        <div className="inline-flex items-center px-3 py-1 bg-slate-900 rounded-full relative z-10">
          <span className="text-xs font-bold text-cyan-400 uppercase">Exclusive</span>
        </div>
      </div>
    </>
  );
}`;
