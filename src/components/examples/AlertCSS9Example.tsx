export default function AlertCSS9Example() {
  return (
    <>
      <style>{`
        @keyframes zoom-in {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .alert-zoom {
          animation: zoom-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(244, 114, 182, 0.3), inset 0 0 5px rgba(244, 114, 182, 0.1); }
          50% { box-shadow: 0 0 20px rgba(244, 114, 182, 0.6), inset 0 0 10px rgba(244, 114, 182, 0.2); }
        }
        .alert-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>
      <div className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-600/20 to-rose-600/20 border-2 border-pink-500/40 rounded-2xl p-5 alert-zoom alert-border-glow">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-pink-300 text-lg mb-1">Event Reminder</h4>
            <p className="text-sm text-pink-200/80">Team meeting starts in 15 minutes!</p>
          </div>
          <button className="px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-lg transition-colors">
            Join
          </button>
        </div>
      </div>
    </>
  );
}

export const alertcss9Code = `export default function AlertCSS9Example() {
  return (
    <>
      <style>{\`
        @keyframes zoom-in {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .alert-zoom {
          animation: zoom-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(244, 114, 182, 0.3), inset 0 0 5px rgba(244, 114, 182, 0.1); }
          50% { box-shadow: 0 0 20px rgba(244, 114, 182, 0.6), inset 0 0 10px rgba(244, 114, 182, 0.2); }
        }
        .alert-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-600/20 to-rose-600/20 border-2 border-pink-500/40 rounded-2xl p-5 alert-zoom alert-border-glow">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-pink-300 text-lg mb-1">Event Reminder</h4>
            <p className="text-sm text-pink-200/80">Team meeting starts in 15 minutes!</p>
          </div>
          <button className="px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-lg transition-colors">
            Join
          </button>
        </div>
      </div>
    </>
  );
}`;
