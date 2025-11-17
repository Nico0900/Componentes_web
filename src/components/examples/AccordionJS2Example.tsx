export default function AccordionJS2Example() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Preguntas Frecuentes</h3>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('svg');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
            }}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-blue-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">1</span>
              ¿Cuánto cuesta el servicio?
            </span>
            <svg className="w-5 h-5 text-blue-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-5 py-4 bg-blue-50/50 border-t border-blue-100">
            <p className="text-gray-700 text-sm leading-relaxed">Ofrecemos planes desde $9.99/mes hasta planes empresariales personalizados. Todos incluyen 14 días de prueba gratuita.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('svg');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
            }}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-blue-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">2</span>
              ¿Puedo cancelar en cualquier momento?
            </span>
            <svg className="w-5 h-5 text-indigo-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-5 py-4 bg-indigo-50/50 border-t border-indigo-100">
            <p className="text-gray-700 text-sm leading-relaxed">Sí, puedes cancelar tu suscripción en cualquier momento sin penalización. No hay contratos de permanencia.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('svg');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
            }}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-blue-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">3</span>
              ¿Hay soporte técnico?
            </span>
            <svg className="w-5 h-5 text-purple-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-5 py-4 bg-purple-50/50 border-t border-purple-100">
            <p className="text-gray-700 text-sm leading-relaxed">Ofrecemos soporte 24/7 por email y chat. Los planes premium incluyen soporte telefónico prioritario.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const accordionjs2Code = `export default function AccordionJS2Example() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Preguntas Frecuentes</h3>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('svg');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
            }}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-blue-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">1</span>
              ¿Cuánto cuesta el servicio?
            </span>
            <svg className="w-5 h-5 text-blue-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-5 py-4 bg-blue-50/50 border-t border-blue-100">
            <p className="text-gray-700 text-sm leading-relaxed">Ofrecemos planes desde $9.99/mes hasta planes empresariales personalizados. Todos incluyen 14 días de prueba gratuita.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('svg');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
            }}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-blue-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">2</span>
              ¿Puedo cancelar en cualquier momento?
            </span>
            <svg className="w-5 h-5 text-indigo-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-5 py-4 bg-indigo-50/50 border-t border-indigo-100">
            <p className="text-gray-700 text-sm leading-relaxed">Sí, puedes cancelar tu suscripción en cualquier momento sin penalización. No hay contratos de permanencia.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector('svg');
              if (content) {
                content.classList.toggle('hidden');
              }
              if (icon) {
                icon.classList.toggle('rotate-180');
              }
            }}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-blue-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">3</span>
              ¿Hay soporte técnico?
            </span>
            <svg className="w-5 h-5 text-purple-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-5 py-4 bg-purple-50/50 border-t border-purple-100">
            <p className="text-gray-700 text-sm leading-relaxed">Ofrecemos soporte 24/7 por email y chat. Los planes premium incluyen soporte telefónico prioritario.</p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
