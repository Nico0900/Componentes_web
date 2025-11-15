export default function ButtonExample() {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200">
        Primary
      </button>
      <button className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200">
        Secondary
      </button>
      <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200">
        Success
      </button>
      <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200">
        Danger
      </button>
    </div>
  );
}

export const buttonCode = `export default function ButtonExample() {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200">
        Primary
      </button>
      <button className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200">
        Secondary
      </button>
      <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200">
        Success
      </button>
      <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200">
        Danger
      </button>
    </div>
  );
}`;
