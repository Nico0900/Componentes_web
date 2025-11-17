export default function AccordionJS3Example() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="space-y-4">
        <div className="border-l-4 border-green-500 bg-white rounded-r-lg shadow-md overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('.chevron-icon');
              const plusIcon = e.currentTarget.querySelector('.plus-icon');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
              if (plusIcon) {
                plusIcon.classList.toggle('rotate-45');
              }
            }}
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-50 to-white hover:from-green-100 hover:to-green-50 transition-all text-left"
          >
            <span className="font-bold text-gray-900 flex items-center gap-3">
              <svg className="w-5 h-5 plus-icon text-green-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Características principales
            </span>
            <svg className="w-5 h-5 chevron-icon text-green-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-green-50/30">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Diseño responsive y adaptable</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Componentes reutilizables</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fácil personalización</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 bg-white rounded-r-lg shadow-md overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('.chevron-icon');
              const plusIcon = e.currentTarget.querySelector('.plus-icon');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
              if (plusIcon) {
                plusIcon.classList.toggle('rotate-45');
              }
            }}
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all text-left"
          >
            <span className="font-bold text-gray-900 flex items-center gap-3">
              <svg className="w-5 h-5 plus-icon text-blue-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Tecnologías utilizadas
            </span>
            <svg className="w-5 h-5 chevron-icon text-blue-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-blue-50/30">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900">React</p>
                <p className="text-xs text-gray-600">Framework UI</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900">TailwindCSS</p>
                <p className="text-xs text-gray-600">Estilos</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900">TypeScript</p>
                <p className="text-xs text-gray-600">Lenguaje</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900">Vite</p>
                <p className="text-xs text-gray-600">Build tool</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 bg-white rounded-r-lg shadow-md overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('.chevron-icon');
              const plusIcon = e.currentTarget.querySelector('.plus-icon');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
              if (plusIcon) {
                plusIcon.classList.toggle('rotate-45');
              }
            }}
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 hover:to-purple-50 transition-all text-left"
          >
            <span className="font-bold text-gray-900 flex items-center gap-3">
              <svg className="w-5 h-5 plus-icon text-purple-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Documentación
            </span>
            <svg className="w-5 h-5 chevron-icon text-purple-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-purple-50/30">
            <p className="text-gray-700 text-sm mb-3">Encuentra toda la documentación y ejemplos en nuestro sitio oficial.</p>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
              Ver documentación
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const accordionjs3Code = `export default function AccordionJS3Example() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="space-y-4">
        <div className="border-l-4 border-green-500 bg-white rounded-r-lg shadow-md overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('.chevron-icon');
              const plusIcon = e.currentTarget.querySelector('.plus-icon');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
              if (plusIcon) {
                plusIcon.classList.toggle('rotate-45');
              }
            }}
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-50 to-white hover:from-green-100 hover:to-green-50 transition-all text-left"
          >
            <span className="font-bold text-gray-900 flex items-center gap-3">
              <svg className="w-5 h-5 plus-icon text-green-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Características principales
            </span>
            <svg className="w-5 h-5 chevron-icon text-green-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-green-50/30">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Diseño responsive y adaptable</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Componentes reutilizables</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fácil personalización</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 bg-white rounded-r-lg shadow-md overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('.chevron-icon');
              const plusIcon = e.currentTarget.querySelector('.plus-icon');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
              if (plusIcon) {
                plusIcon.classList.toggle('rotate-45');
              }
            }}
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all text-left"
          >
            <span className="font-bold text-gray-900 flex items-center gap-3">
              <svg className="w-5 h-5 plus-icon text-blue-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Tecnologías utilizadas
            </span>
            <svg className="w-5 h-5 chevron-icon text-blue-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-blue-50/30">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900">React</p>
                <p className="text-xs text-gray-600">Framework UI</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900">TailwindCSS</p>
                <p className="text-xs text-gray-600">Estilos</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900">TypeScript</p>
                <p className="text-xs text-gray-600">Lenguaje</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900">Vite</p>
                <p className="text-xs text-gray-600">Build tool</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 bg-white rounded-r-lg shadow-md overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('.chevron-icon');
              const plusIcon = e.currentTarget.querySelector('.plus-icon');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
              if (plusIcon) {
                plusIcon.classList.toggle('rotate-45');
              }
            }}
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 hover:to-purple-50 transition-all text-left"
          >
            <span className="font-bold text-gray-900 flex items-center gap-3">
              <svg className="w-5 h-5 plus-icon text-purple-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Documentación
            </span>
            <svg className="w-5 h-5 chevron-icon text-purple-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-purple-50/30">
            <p className="text-gray-700 text-sm mb-3">Encuentra toda la documentación y ejemplos en nuestro sitio oficial.</p>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
              Ver documentación
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}`;
