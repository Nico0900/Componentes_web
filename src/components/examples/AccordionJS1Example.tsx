export default function AccordionJS1Example() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="space-y-2">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
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
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900">¿Qué es TailwindCSS?</span>
            <svg className="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600 text-sm">TailwindCSS es un framework de CSS utilitario que permite construir diseños personalizados rápidamente.</p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
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
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900">¿Cómo instalar?</span>
            <svg className="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600 text-sm">Puedes instalar Tailwind usando npm: <code className="bg-gray-200 px-2 py-1 rounded">npm install tailwindcss</code></p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
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
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900">¿Es gratis?</span>
            <svg className="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600 text-sm">Sí, TailwindCSS es completamente gratuito y de código abierto bajo la licencia MIT.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const accordionjs1Code = `export default function AccordionJS1Example() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="space-y-2">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
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
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900">¿Qué es TailwindCSS?</span>
            <svg className="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600 text-sm">TailwindCSS es un framework de CSS utilitario que permite construir diseños personalizados rápidamente.</p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
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
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900">¿Cómo instalar?</span>
            <svg className="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600 text-sm">Puedes instalar Tailwind usando npm: <code className="bg-gray-200 px-2 py-1 rounded">npm install tailwindcss</code></p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
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
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <span className="font-semibold text-gray-900">¿Es gratis?</span>
            <svg className="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="hidden px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600 text-sm">Sí, TailwindCSS es completamente gratuito y de código abierto bajo la licencia MIT.</p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
