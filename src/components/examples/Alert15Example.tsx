export default function Alert15Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="bg-yellow-500/20 p-2 rounded-lg shrink-0">
          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-bold text-yellow-300">Maintenance Scheduled</h4>
            <button className="text-yellow-400 hover:text-yellow-300 shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-yellow-200/80 mb-3">
            System maintenance is scheduled for Sunday at 2:00 AM. Service may be temporarily unavailable.
          </p>
          <div className="flex items-center gap-2 text-xs text-yellow-300/70">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Duration: ~2 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const alert15Code = `export default function Alert15Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="bg-yellow-500/20 p-2 rounded-lg shrink-0">
          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-bold text-yellow-300">Maintenance Scheduled</h4>
            <button className="text-yellow-400 hover:text-yellow-300 shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-yellow-200/80 mb-3">
            System maintenance is scheduled for Sunday at 2:00 AM. Service may be temporarily unavailable.
          </p>
          <div className="flex items-center gap-2 text-xs text-yellow-300/70">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Duration: ~2 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}`;
