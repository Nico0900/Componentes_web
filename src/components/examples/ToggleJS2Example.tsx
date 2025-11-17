export default function ToggleJS2Example() {
  return (
    <div className="p-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 max-w-md">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Preferencias</h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Email Marketing</p>
              <p className="text-xs text-gray-600">Recibe nuestras ofertas</p>
            </div>
            <button
              onClick={(e) => {
                const toggle = e.currentTarget;
                const circle = toggle.querySelector('.toggle-circle');
                const check = toggle.querySelector('.check-icon');
                toggle.classList.toggle('bg-green-500');
                toggle.classList.toggle('bg-gray-200');
                circle?.classList.toggle('translate-x-7');
                check?.classList.toggle('hidden');
              }}
              className="relative w-16 h-9 bg-green-500 rounded-full transition-all cursor-pointer shadow-inner"
            >
              <span className="toggle-circle absolute left-1 top-1 w-7 h-7 bg-white rounded-full transition-transform shadow-lg flex items-center justify-center translate-x-7">
                <svg className="check-icon w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Notificaciones Push</p>
              <p className="text-xs text-gray-600">Alertas en tiempo real</p>
            </div>
            <button
              onClick={(e) => {
                const toggle = e.currentTarget;
                const circle = toggle.querySelector('.toggle-circle');
                const check = toggle.querySelector('.check-icon');
                toggle.classList.toggle('bg-green-500');
                toggle.classList.toggle('bg-gray-200');
                circle?.classList.toggle('translate-x-7');
                check?.classList.toggle('hidden');
              }}
              className="relative w-16 h-9 bg-gray-200 rounded-full transition-all cursor-pointer shadow-inner"
            >
              <span className="toggle-circle absolute left-1 top-1 w-7 h-7 bg-white rounded-full transition-transform shadow-lg flex items-center justify-center">
                <svg className="check-icon hidden w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Modo Privado</p>
              <p className="text-xs text-gray-600">Ocultar tu actividad</p>
            </div>
            <button
              onClick={(e) => {
                const toggle = e.currentTarget;
                const circle = toggle.querySelector('.toggle-circle');
                const check = toggle.querySelector('.check-icon');
                toggle.classList.toggle('bg-green-500');
                toggle.classList.toggle('bg-gray-200');
                circle?.classList.toggle('translate-x-7');
                check?.classList.toggle('hidden');
              }}
              className="relative w-16 h-9 bg-gray-200 rounded-full transition-all cursor-pointer shadow-inner"
            >
              <span className="toggle-circle absolute left-1 top-1 w-7 h-7 bg-white rounded-full transition-transform shadow-lg flex items-center justify-center">
                <svg className="check-icon hidden w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const togglejs2Code = `export default function ToggleJS2Example() {
  return (
    <div className="p-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 max-w-md">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Preferencias</h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Email Marketing</p>
              <p className="text-xs text-gray-600">Recibe nuestras ofertas</p>
            </div>
            <button
              onClick={(e) => {
                const toggle = e.currentTarget;
                const circle = toggle.querySelector('.toggle-circle');
                const check = toggle.querySelector('.check-icon');
                toggle.classList.toggle('bg-green-500');
                toggle.classList.toggle('bg-gray-200');
                circle?.classList.toggle('translate-x-7');
                check?.classList.toggle('hidden');
              }}
              className="relative w-16 h-9 bg-green-500 rounded-full transition-all cursor-pointer shadow-inner"
            >
              <span className="toggle-circle absolute left-1 top-1 w-7 h-7 bg-white rounded-full transition-transform shadow-lg flex items-center justify-center translate-x-7">
                <svg className="check-icon w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Notificaciones Push</p>
              <p className="text-xs text-gray-600">Alertas en tiempo real</p>
            </div>
            <button
              onClick={(e) => {
                const toggle = e.currentTarget;
                const circle = toggle.querySelector('.toggle-circle');
                const check = toggle.querySelector('.check-icon');
                toggle.classList.toggle('bg-green-500');
                toggle.classList.toggle('bg-gray-200');
                circle?.classList.toggle('translate-x-7');
                check?.classList.toggle('hidden');
              }}
              className="relative w-16 h-9 bg-gray-200 rounded-full transition-all cursor-pointer shadow-inner"
            >
              <span className="toggle-circle absolute left-1 top-1 w-7 h-7 bg-white rounded-full transition-transform shadow-lg flex items-center justify-center">
                <svg className="check-icon hidden w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Modo Privado</p>
              <p className="text-xs text-gray-600">Ocultar tu actividad</p>
            </div>
            <button
              onClick={(e) => {
                const toggle = e.currentTarget;
                const circle = toggle.querySelector('.toggle-circle');
                const check = toggle.querySelector('.check-icon');
                toggle.classList.toggle('bg-green-500');
                toggle.classList.toggle('bg-gray-200');
                circle?.classList.toggle('translate-x-7');
                check?.classList.toggle('hidden');
              }}
              className="relative w-16 h-9 bg-gray-200 rounded-full transition-all cursor-pointer shadow-inner"
            >
              <span className="toggle-circle absolute left-1 top-1 w-7 h-7 bg-white rounded-full transition-transform shadow-lg flex items-center justify-center">
                <svg className="check-icon hidden w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
