export default function Card7Example() {
  return (
    <div className="max-w-sm mx-auto bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-400 to-cyan-600 p-0.5">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-xl font-bold text-emerald-400">JD</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-slate-100">John Doe</h3>
          <p className="text-sm text-slate-400">Senior Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex text-yellow-400 text-sm mb-1">
            {'★'.repeat(5)}
          </div>
          <span className="text-xs text-slate-500">5.0</span>
        </div>
      </div>

      <div className="relative mb-4">
        <div className="absolute -left-2 top-0 text-4xl text-emerald-500/30">"</div>
        <p className="text-slate-300 text-sm leading-relaxed pl-4 italic">
          This component library is absolutely amazing! The designs are modern and the code quality is top-notch. Highly recommended!
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
        <span className="text-xs text-slate-500">2 days ago</span>
        <button className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export const card7Code = `export default function Card7Example() {
  return (
    <div className="max-w-sm mx-auto bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-400 to-cyan-600 p-0.5">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-xl font-bold text-emerald-400">JD</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-slate-100">John Doe</h3>
          <p className="text-sm text-slate-400">Senior Developer</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex text-yellow-400 text-sm mb-1">
            {'★'.repeat(5)}
          </div>
          <span className="text-xs text-slate-500">5.0</span>
        </div>
      </div>

      <div className="relative mb-4">
        <div className="absolute -left-2 top-0 text-4xl text-emerald-500/30">"</div>
        <p className="text-slate-300 text-sm leading-relaxed pl-4 italic">
          This component library is absolutely amazing! The designs are modern and the code quality is top-notch. Highly recommended!
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
        <span className="text-xs text-slate-500">2 days ago</span>
        <button className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
    </div>
  );
}`;
