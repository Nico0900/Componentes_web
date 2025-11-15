export default function CardExample() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title</h3>
        <p className="text-gray-600 text-sm mb-4">
          Esta es una tarjeta de ejemplo con un diseño limpio y moderno.
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
          Acción
        </button>
      </div>
    </div>
  );
}

export const cardCode = `export default function CardExample() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title</h3>
        <p className="text-gray-600 text-sm mb-4">
          Esta es una tarjeta de ejemplo con un diseño limpio y moderno.
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
          Acción
        </button>
      </div>
    </div>
  );
}`;
