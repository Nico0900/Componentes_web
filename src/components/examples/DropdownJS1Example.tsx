export default function DropdownJS1Example() {
  return (
    <div className="p-8">
      <div className="relative inline-block" id="dropdown-js1">
        <button
          onClick={() => {
            const menu = document.getElementById('dropdown-menu-js1');
            if (menu) {
              menu.classList.toggle('hidden');
            }
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Opciones
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          id="dropdown-menu-js1"
          className="hidden absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10"
        >
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
            Perfil
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
            Configuración
          </a>
          <hr className="my-1 border-gray-200" />
          <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50 transition-colors">
            Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export const dropdownjs1Code = `export default function DropdownJS1Example() {
  return (
    <div className="p-8">
      <div className="relative inline-block" id="dropdown-js1">
        <button
          onClick={() => {
            const menu = document.getElementById('dropdown-menu-js1');
            if (menu) {
              menu.classList.toggle('hidden');
            }
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Opciones
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          id="dropdown-menu-js1"
          className="hidden absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10"
        >
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
            Perfil
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
            Configuración
          </a>
          <hr className="my-1 border-gray-200" />
          <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50 transition-colors">
            Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  );
}`;
