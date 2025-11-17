export default function TabsJS2Example() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-1">
        <div className="flex gap-2 p-2 bg-white/50 backdrop-blur rounded-lg" id="tabs-js2">
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js2 button').forEach(b => {
                b.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
                b.classList.add('text-gray-700');
              });
              document.querySelectorAll('.tab-content-js2').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
              e.currentTarget.classList.remove('text-gray-700');
              document.getElementById('tab1-js2')?.classList.remove('hidden');
            }}
            className="flex-1 px-6 py-3 font-semibold rounded-lg transition-all bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
          >
            Dashboard
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js2 button').forEach(b => {
                b.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
                b.classList.add('text-gray-700');
              });
              document.querySelectorAll('.tab-content-js2').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
              e.currentTarget.classList.remove('text-gray-700');
              document.getElementById('tab2-js2')?.classList.remove('hidden');
            }}
            className="flex-1 px-6 py-3 font-semibold rounded-lg transition-all text-gray-700"
          >
            Estadísticas
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js2 button').forEach(b => {
                b.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
                b.classList.add('text-gray-700');
              });
              document.querySelectorAll('.tab-content-js2').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
              e.currentTarget.classList.remove('text-gray-700');
              document.getElementById('tab3-js2')?.classList.remove('hidden');
            }}
            className="flex-1 px-6 py-3 font-semibold rounded-lg transition-all text-gray-700"
          >
            Reportes
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg mt-2">
          <div id="tab1-js2" className="tab-content-js2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dashboard Principal</h3>
                <p className="text-gray-600 text-sm">Vista general de tus métricas</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-600 font-semibold">Usuarios</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-pink-600 font-semibold">Ventas</p>
                <p className="text-2xl font-bold text-gray-900">$5,678</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-600 font-semibold">Pedidos</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
            </div>
          </div>
          <div id="tab2-js2" className="tab-content-js2 hidden">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Estadísticas Detalladas</h3>
            <p className="text-gray-600 mb-4">Análisis completo de tu rendimiento.</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tasa de conversión</span>
                <span className="font-bold text-green-600">+12.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tiempo promedio</span>
                <span className="font-bold text-blue-600">2:34 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Bounce rate</span>
                <span className="font-bold text-red-600">45.2%</span>
              </div>
            </div>
          </div>
          <div id="tab3-js2" className="tab-content-js2 hidden">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reportes Mensuales</h3>
            <p className="text-gray-600">Genera y descarga reportes personalizados de tus datos.</p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg font-semibold">
              Descargar Reporte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const tabsjs2Code = `export default function TabsJS2Example() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-1">
        <div className="flex gap-2 p-2 bg-white/50 backdrop-blur rounded-lg" id="tabs-js2">
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js2 button').forEach(b => {
                b.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
                b.classList.add('text-gray-700');
              });
              document.querySelectorAll('.tab-content-js2').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
              e.currentTarget.classList.remove('text-gray-700');
              document.getElementById('tab1-js2')?.classList.remove('hidden');
            }}
            className="flex-1 px-6 py-3 font-semibold rounded-lg transition-all bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
          >
            Dashboard
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js2 button').forEach(b => {
                b.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
                b.classList.add('text-gray-700');
              });
              document.querySelectorAll('.tab-content-js2').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
              e.currentTarget.classList.remove('text-gray-700');
              document.getElementById('tab2-js2')?.classList.remove('hidden');
            }}
            className="flex-1 px-6 py-3 font-semibold rounded-lg transition-all text-gray-700"
          >
            Estadísticas
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js2 button').forEach(b => {
                b.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
                b.classList.add('text-gray-700');
              });
              document.querySelectorAll('.tab-content-js2').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'shadow-lg');
              e.currentTarget.classList.remove('text-gray-700');
              document.getElementById('tab3-js2')?.classList.remove('hidden');
            }}
            className="flex-1 px-6 py-3 font-semibold rounded-lg transition-all text-gray-700"
          >
            Reportes
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg mt-2">
          <div id="tab1-js2" className="tab-content-js2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dashboard Principal</h3>
                <p className="text-gray-600 text-sm">Vista general de tus métricas</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-600 font-semibold">Usuarios</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-pink-600 font-semibold">Ventas</p>
                <p className="text-2xl font-bold text-gray-900">$5,678</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-600 font-semibold">Pedidos</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
            </div>
          </div>
          <div id="tab2-js2" className="tab-content-js2 hidden">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Estadísticas Detalladas</h3>
            <p className="text-gray-600 mb-4">Análisis completo de tu rendimiento.</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tasa de conversión</span>
                <span className="font-bold text-green-600">+12.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tiempo promedio</span>
                <span className="font-bold text-blue-600">2:34 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Bounce rate</span>
                <span className="font-bold text-red-600">45.2%</span>
              </div>
            </div>
          </div>
          <div id="tab3-js2" className="tab-content-js2 hidden">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reportes Mensuales</h3>
            <p className="text-gray-600">Genera y descarga reportes personalizados de tus datos.</p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg font-semibold">
              Descargar Reporte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
