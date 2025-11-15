export default function AlertExample() {
  return (
    <div className="space-y-3">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-blue-700 font-medium">Información: Este es un mensaje informativo.</p>
      </div>
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
        <p className="text-green-700 font-medium">Éxito: La operación se completó correctamente.</p>
      </div>
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <p className="text-red-700 font-medium">Error: Algo salió mal.</p>
      </div>
    </div>
  );
}

export const alertCode = `export default function AlertExample() {
  return (
    <div className="space-y-3">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-blue-700 font-medium">Información: Este es un mensaje informativo.</p>
      </div>
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
        <p className="text-green-700 font-medium">Éxito: La operación se completó correctamente.</p>
      </div>
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <p className="text-red-700 font-medium">Error: Algo salió mal.</p>
      </div>
    </div>
  );
}`;
