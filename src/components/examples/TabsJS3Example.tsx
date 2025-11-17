export default function TabsJS3Example() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200">
        <div className="grid grid-cols-4 gap-0" id="tabs-js3">
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js3 button').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-50', 'text-gray-600');
              });
              document.querySelectorAll('.tab-content-js3').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-blue-600', 'text-white');
              e.currentTarget.classList.remove('bg-gray-50', 'text-gray-600');
              document.getElementById('tab1-js3')?.classList.remove('hidden');
            }}
            className="flex flex-col items-center gap-2 p-4 bg-blue-600 text-white rounded-tl-2xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs font-semibold">Inicio</span>
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js3 button').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-50', 'text-gray-600');
              });
              document.querySelectorAll('.tab-content-js3').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-blue-600', 'text-white');
              e.currentTarget.classList.remove('bg-gray-50', 'text-gray-600');
              document.getElementById('tab2-js3')?.classList.remove('hidden');
            }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 text-gray-600 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs font-semibold">Buscar</span>
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js3 button').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-50', 'text-gray-600');
              });
              document.querySelectorAll('.tab-content-js3').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-blue-600', 'text-white');
              e.currentTarget.classList.remove('bg-gray-50', 'text-gray-600');
              document.getElementById('tab3-js3')?.classList.remove('hidden');
            }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 text-gray-600 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="text-xs font-semibold">Notificaciones</span>
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js3 button').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-50', 'text-gray-600');
              });
              document.querySelectorAll('.tab-content-js3').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-blue-600', 'text-white');
              e.currentTarget.classList.remove('bg-gray-50', 'text-gray-600');
              document.getElementById('tab4-js3')?.classList.remove('hidden');
            }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 text-gray-600 rounded-tr-2xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-semibold">Perfil</span>
          </button>
        </div>

        <div className="p-8 border-t border-gray-200">
          <div id="tab1-js3" className="tab-content-js3">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Página de Inicio</h3>
            <p className="text-gray-600 mb-4">Bienvenido a tu dashboard principal.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-900 font-bold text-lg">24</p>
                <p className="text-blue-600 text-sm">Tareas pendientes</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-green-900 font-bold text-lg">18</p>
                <p className="text-green-600 text-sm">Tareas completadas</p>
              </div>
            </div>
          </div>
          <div id="tab2-js3" className="tab-content-js3 hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Búsqueda</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm mt-4">Busca en toda la aplicación</p>
          </div>
          <div id="tab3-js3" className="tab-content-js3 hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Notificaciones</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Nueva actualización disponible</p>
                  <p className="text-sm text-gray-600">Hace 2 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Comentario en tu publicación</p>
                  <p className="text-sm text-gray-600">Hace 5 horas</p>
                </div>
              </div>
            </div>
          </div>
          <div id="tab4-js3" className="tab-content-js3 hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">John Doe</h3>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const tabsjs3Code = `export default function TabsJS3Example() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200">
        <div className="grid grid-cols-4 gap-0" id="tabs-js3">
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js3 button').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-50', 'text-gray-600');
              });
              document.querySelectorAll('.tab-content-js3').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-blue-600', 'text-white');
              e.currentTarget.classList.remove('bg-gray-50', 'text-gray-600');
              document.getElementById('tab1-js3')?.classList.remove('hidden');
            }}
            className="flex flex-col items-center gap-2 p-4 bg-blue-600 text-white rounded-tl-2xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs font-semibold">Inicio</span>
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js3 button').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-50', 'text-gray-600');
              });
              document.querySelectorAll('.tab-content-js3').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-blue-600', 'text-white');
              e.currentTarget.classList.remove('bg-gray-50', 'text-gray-600');
              document.getElementById('tab2-js3')?.classList.remove('hidden');
            }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 text-gray-600 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs font-semibold">Buscar</span>
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js3 button').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-50', 'text-gray-600');
              });
              document.querySelectorAll('.tab-content-js3').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-blue-600', 'text-white');
              e.currentTarget.classList.remove('bg-gray-50', 'text-gray-600');
              document.getElementById('tab3-js3')?.classList.remove('hidden');
            }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 text-gray-600 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="text-xs font-semibold">Notificaciones</span>
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js3 button').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-gray-50', 'text-gray-600');
              });
              document.querySelectorAll('.tab-content-js3').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-blue-600', 'text-white');
              e.currentTarget.classList.remove('bg-gray-50', 'text-gray-600');
              document.getElementById('tab4-js3')?.classList.remove('hidden');
            }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 text-gray-600 rounded-tr-2xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-semibold">Perfil</span>
          </button>
        </div>

        <div className="p-8 border-t border-gray-200">
          <div id="tab1-js3" className="tab-content-js3">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Página de Inicio</h3>
            <p className="text-gray-600 mb-4">Bienvenido a tu dashboard principal.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-900 font-bold text-lg">24</p>
                <p className="text-blue-600 text-sm">Tareas pendientes</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-green-900 font-bold text-lg">18</p>
                <p className="text-green-600 text-sm">Tareas completadas</p>
              </div>
            </div>
          </div>
          <div id="tab2-js3" className="tab-content-js3 hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Búsqueda</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm mt-4">Busca en toda la aplicación</p>
          </div>
          <div id="tab3-js3" className="tab-content-js3 hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Notificaciones</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Nueva actualización disponible</p>
                  <p className="text-sm text-gray-600">Hace 2 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Comentario en tu publicación</p>
                  <p className="text-sm text-gray-600">Hace 5 horas</p>
                </div>
              </div>
            </div>
          </div>
          <div id="tab4-js3" className="tab-content-js3 hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">John Doe</h3>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
