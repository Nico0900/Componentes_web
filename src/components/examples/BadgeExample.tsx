export default function BadgeExample() {
  return (
    <div className="flex gap-3 flex-wrap justify-center items-center">
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
        Nuevo
      </span>
      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
        Activo
      </span>
      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
        Pendiente
      </span>
      <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
        Urgente
      </span>
      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
        Premium
      </span>
    </div>
  );
}

export const badgeCode = `export default function BadgeExample() {
  return (
    <div className="flex gap-3 flex-wrap justify-center items-center">
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
        Nuevo
      </span>
      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
        Activo
      </span>
      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
        Pendiente
      </span>
      <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
        Urgente
      </span>
      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
        Premium
      </span>
    </div>
  );
}`;
