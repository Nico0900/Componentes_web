export default function Button7Example() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Large */}
      <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition-colors duration-200">
        Large Button
      </button>

      {/* Medium (Default) */}
      <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg transition-colors duration-200">
        Medium Button
      </button>

      {/* Small */}
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
        Small Button
      </button>

      {/* Extra Small */}
      <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition-colors duration-200">
        XSmall Button
      </button>
    </div>
  );
}

export const button7Code = `export default function Button7Example() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Large */}
      <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition-colors duration-200">
        Large Button
      </button>

      {/* Medium (Default) */}
      <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg transition-colors duration-200">
        Medium Button
      </button>

      {/* Small */}
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
        Small Button
      </button>

      {/* Extra Small */}
      <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition-colors duration-200">
        XSmall Button
      </button>
    </div>
  );
}`;
