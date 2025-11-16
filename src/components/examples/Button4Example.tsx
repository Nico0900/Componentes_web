export default function Button4Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <button className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/50">
        Blue Gradient
      </button>
      <button className="px-6 py-2.5 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-purple-900/50">
        Purple Gradient
      </button>
      <button className="px-6 py-2.5 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-green-900/50">
        Green Gradient
      </button>
      <button className="px-6 py-2.5 bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-red-900/50">
        Fire Gradient
      </button>
    </div>
  );
}

export const button4Code = `export default function Button4Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <button className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/50">
        Blue Gradient
      </button>
      <button className="px-6 py-2.5 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-purple-900/50">
        Purple Gradient
      </button>
      <button className="px-6 py-2.5 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-green-900/50">
        Green Gradient
      </button>
      <button className="px-6 py-2.5 bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-red-900/50">
        Fire Gradient
      </button>
    </div>
  );
}`;
