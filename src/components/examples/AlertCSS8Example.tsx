export default function AlertCSS8Example() {
  return (
    <>
      <style>{`
        @keyframes flip-in {
          0% { transform: rotateX(-90deg); opacity: 0; }
          100% { transform: rotateX(0); opacity: 1; }
        }
        .alert-flip {
          animation: flip-in 0.6s ease-out;
          transform-origin: top;
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .alert-wave:hover .icon-wave {
          animation: wave 0.5s ease-in-out 3;
        }
      `}</style>
      <div className="w-full max-w-md mx-auto bg-indigo-600/15 border-l-4 border-indigo-500 rounded-r-xl p-5 alert-flip alert-wave">
        <div className="flex items-start gap-3">
          <div className="bg-indigo-500/20 p-2.5 rounded-lg icon-wave">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-indigo-300 mb-1">New Comment</h4>
            <p className="text-sm text-indigo-200/80 mb-2">Someone replied to your comment on "Project Alpha"</p>
            <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 underline">
              View Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export const alertcss8Code = `export default function AlertCSS8Example() {
  return (
    <>
      <style>{\`
        @keyframes flip-in {
          0% { transform: rotateX(-90deg); opacity: 0; }
          100% { transform: rotateX(0); opacity: 1; }
        }
        .alert-flip {
          animation: flip-in 0.6s ease-out;
          transform-origin: top;
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .alert-wave:hover .icon-wave {
          animation: wave 0.5s ease-in-out 3;
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto bg-indigo-600/15 border-l-4 border-indigo-500 rounded-r-xl p-5 alert-flip alert-wave">
        <div className="flex items-start gap-3">
          <div className="bg-indigo-500/20 p-2.5 rounded-lg icon-wave">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-indigo-300 mb-1">New Comment</h4>
            <p className="text-sm text-indigo-200/80 mb-2">Someone replied to your comment on "Project Alpha"</p>
            <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 underline">
              View Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}`;
