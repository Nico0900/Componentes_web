export default function TabsJS1Example() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex border-b border-gray-200" id="tabs-js1">
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js1 button').forEach(b => b.classList.remove('border-blue-500', 'text-blue-600'));
              document.querySelectorAll('.tab-content-js1').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('border-blue-500', 'text-blue-600');
              document.getElementById('tab1-js1')?.classList.remove('hidden');
            }}
            className="px-6 py-3 font-medium text-gray-700 border-b-2 border-blue-500 text-blue-600 hover:text-blue-600 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js1 button').forEach(b => b.classList.remove('border-blue-500', 'text-blue-600'));
              document.querySelectorAll('.tab-content-js1').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('border-blue-500', 'text-blue-600');
              document.getElementById('tab2-js1')?.classList.remove('hidden');
            }}
            className="px-6 py-3 font-medium text-gray-700 border-b-2 border-transparent hover:text-blue-600 transition-colors"
          >
            Perfil
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js1 button').forEach(b => b.classList.remove('border-blue-500', 'text-blue-600'));
              document.querySelectorAll('.tab-content-js1').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('border-blue-500', 'text-blue-600');
              document.getElementById('tab3-js1')?.classList.remove('hidden');
            }}
            className="px-6 py-3 font-medium text-gray-700 border-b-2 border-transparent hover:text-blue-600 transition-colors"
          >
            Configuración
          </button>
        </div>

        <div className="p-6">
          <div id="tab1-js1" className="tab-content-js1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bienvenido</h3>
            <p className="text-gray-600">Esta es la pestaña de inicio con información general.</p>
          </div>
          <div id="tab2-js1" className="tab-content-js1 hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Tu Perfil</h3>
            <p className="text-gray-600">Aquí puedes ver y editar tu información de perfil.</p>
          </div>
          <div id="tab3-js1" className="tab-content-js1 hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Configuración</h3>
            <p className="text-gray-600">Personaliza tus preferencias y ajustes de la aplicación.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const tabsjs1Code = `export default function TabsJS1Example() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex border-b border-gray-200" id="tabs-js1">
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js1 button').forEach(b => b.classList.remove('border-blue-500', 'text-blue-600'));
              document.querySelectorAll('.tab-content-js1').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('border-blue-500', 'text-blue-600');
              document.getElementById('tab1-js1')?.classList.remove('hidden');
            }}
            className="px-6 py-3 font-medium text-gray-700 border-b-2 border-blue-500 text-blue-600 hover:text-blue-600 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js1 button').forEach(b => b.classList.remove('border-blue-500', 'text-blue-600'));
              document.querySelectorAll('.tab-content-js1').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('border-blue-500', 'text-blue-600');
              document.getElementById('tab2-js1')?.classList.remove('hidden');
            }}
            className="px-6 py-3 font-medium text-gray-700 border-b-2 border-transparent hover:text-blue-600 transition-colors"
          >
            Perfil
          </button>
          <button
            onClick={(e) => {
              document.querySelectorAll('#tabs-js1 button').forEach(b => b.classList.remove('border-blue-500', 'text-blue-600'));
              document.querySelectorAll('.tab-content-js1').forEach(c => c.classList.add('hidden'));
              e.currentTarget.classList.add('border-blue-500', 'text-blue-600');
              document.getElementById('tab3-js1')?.classList.remove('hidden');
            }}
            className="px-6 py-3 font-medium text-gray-700 border-b-2 border-transparent hover:text-blue-600 transition-colors"
          >
            Configuración
          </button>
        </div>

        <div className="p-6">
          <div id="tab1-js1" className="tab-content-js1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bienvenido</h3>
            <p className="text-gray-600">Esta es la pestaña de inicio con información general.</p>
          </div>
          <div id="tab2-js1" className="tab-content-js1 hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Tu Perfil</h3>
            <p className="text-gray-600">Aquí puedes ver y editar tu información de perfil.</p>
          </div>
          <div id="tab3-js1" className="tab-content-js1 hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Configuración</h3>
            <p className="text-gray-600">Personaliza tus preferencias y ajustes de la aplicación.</p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
