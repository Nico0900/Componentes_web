export default function Badge11Example() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg">
      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
      <span className="text-xs font-bold text-white uppercase tracking-wide">Admin</span>
    </div>
  );
}

export const badge11Code = `export default function Badge11Example() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg">
      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
      <span className="text-xs font-bold text-white uppercase tracking-wide">Admin</span>
    </div>
  );
}`;
