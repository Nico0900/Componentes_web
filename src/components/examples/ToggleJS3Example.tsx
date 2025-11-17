export default function ToggleJS3Example() {
  return (
    <div className="p-8 space-y-6 max-w-sm">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-gray-900">Disponible</span>
          <button
            onClick={(e) => {
              const toggle = e.currentTarget;
              const onText = toggle.querySelector('.on-text');
              const offText = toggle.querySelector('.off-text');
              toggle.classList.toggle('bg-green-500');
              toggle.classList.toggle('bg-red-500');
              toggle.classList.toggle('justify-end');
              toggle.classList.toggle('justify-start');
              onText?.classList.toggle('hidden');
              offText?.classList.toggle('hidden');
            }}
            className="flex items-center justify-start w-20 h-10 bg-red-500 rounded-full transition-all cursor-pointer px-1"
          >
            <span className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="on-text hidden text-xs font-bold text-green-600">ON</span>
              <span className="off-text text-xs font-bold text-red-600">OFF</span>
            </span>
          </button>
        </div>
        <p className="text-sm text-gray-600">Indica tu estado de disponibilidad</p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 border border-orange-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <span className="font-bold text-gray-900">Modo Claro</span>
          </div>
          <button
            onClick={(e) => {
              const toggle = e.currentTarget;
              const sunIcon = document.querySelector('.sun-icon') as HTMLElement;
              const moonIcon = document.querySelector('.moon-icon') as HTMLElement;
              const label = document.querySelector('.mode-label') as HTMLElement;

              toggle.classList.toggle('bg-indigo-600');
              toggle.classList.toggle('bg-yellow-400');

              const slider = toggle.querySelector('.slider');
              slider?.classList.toggle('translate-x-10');

              if (sunIcon && moonIcon && label) {
                sunIcon.classList.toggle('hidden');
                moonIcon.classList.toggle('hidden');
                label.textContent = label.textContent === 'Modo Claro' ? 'Modo Oscuro' : 'Modo Claro';
              }
            }}
            className="relative w-20 h-10 bg-yellow-400 rounded-full transition-all cursor-pointer"
          >
            <span className="slider absolute left-1 top-1 w-8 h-8 bg-white rounded-full transition-transform shadow-lg flex items-center justify-center">
              <svg className="sun-icon w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              <svg className="moon-icon hidden w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </span>
          </button>
        </div>
        <p className="text-sm text-gray-600 mode-label">Cambia entre modo claro y oscuro</p>
      </div>
    </div>
  );
}

export const togglejs3Code = `export default function ToggleJS3Example() {
  return (
    <div className="p-8 space-y-6 max-w-sm">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-gray-900">Disponible</span>
          <button
            onClick={(e) => {
              const toggle = e.currentTarget;
              const onText = toggle.querySelector('.on-text');
              const offText = toggle.querySelector('.off-text');
              toggle.classList.toggle('bg-green-500');
              toggle.classList.toggle('bg-red-500');
              toggle.classList.toggle('justify-end');
              toggle.classList.toggle('justify-start');
              onText?.classList.toggle('hidden');
              offText?.classList.toggle('hidden');
            }}
            className="flex items-center justify-start w-20 h-10 bg-red-500 rounded-full transition-all cursor-pointer px-1"
          >
            <span className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="on-text hidden text-xs font-bold text-green-600">ON</span>
              <span className="off-text text-xs font-bold text-red-600">OFF</span>
            </span>
          </button>
        </div>
        <p className="text-sm text-gray-600">Indica tu estado de disponibilidad</p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 border border-orange-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <span className="font-bold text-gray-900">Modo Claro</span>
          </div>
          <button
            onClick={(e) => {
              const toggle = e.currentTarget;
              const sunIcon = document.querySelector('.sun-icon') as HTMLElement;
              const moonIcon = document.querySelector('.moon-icon') as HTMLElement;
              const label = document.querySelector('.mode-label') as HTMLElement;

              toggle.classList.toggle('bg-indigo-600');
              toggle.classList.toggle('bg-yellow-400');

              const slider = toggle.querySelector('.slider');
              slider?.classList.toggle('translate-x-10');

              if (sunIcon && moonIcon && label) {
                sunIcon.classList.toggle('hidden');
                moonIcon.classList.toggle('hidden');
                label.textContent = label.textContent === 'Modo Claro' ? 'Modo Oscuro' : 'Modo Claro';
              }
            }}
            className="relative w-20 h-10 bg-yellow-400 rounded-full transition-all cursor-pointer"
          >
            <span className="slider absolute left-1 top-1 w-8 h-8 bg-white rounded-full transition-transform shadow-lg flex items-center justify-center">
              <svg className="sun-icon w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              <svg className="moon-icon hidden w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </span>
          </button>
        </div>
        <p className="text-sm text-gray-600 mode-label">Cambia entre modo claro y oscuro</p>
      </div>
    </div>
  );
}`;
