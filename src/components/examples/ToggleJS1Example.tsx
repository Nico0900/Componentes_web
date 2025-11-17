export default function ToggleJS1Example() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            const toggle = e.currentTarget;
            const circle = toggle.querySelector('.toggle-circle');
            toggle.classList.toggle('bg-blue-600');
            toggle.classList.toggle('bg-gray-300');
            circle?.classList.toggle('translate-x-6');
          }}
          className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors cursor-pointer"
        >
          <span className="toggle-circle absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md"></span>
        </button>
        <span className="text-gray-700 font-medium">Notificaciones</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            const toggle = e.currentTarget;
            const circle = toggle.querySelector('.toggle-circle');
            toggle.classList.toggle('bg-green-600');
            toggle.classList.toggle('bg-gray-300');
            circle?.classList.toggle('translate-x-6');
          }}
          className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors cursor-pointer"
        >
          <span className="toggle-circle absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md"></span>
        </button>
        <span className="text-gray-700 font-medium">Modo oscuro</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            const toggle = e.currentTarget;
            const circle = toggle.querySelector('.toggle-circle');
            toggle.classList.toggle('bg-purple-600');
            toggle.classList.toggle('bg-gray-300');
            circle?.classList.toggle('translate-x-6');
          }}
          className="relative w-14 h-8 bg-purple-600 rounded-full transition-colors cursor-pointer"
        >
          <span className="toggle-circle absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md translate-x-6"></span>
        </button>
        <span className="text-gray-700 font-medium">Autoguardado (activo)</span>
      </div>
    </div>
  );
}

export const togglejs1Code = `export default function ToggleJS1Example() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            const toggle = e.currentTarget;
            const circle = toggle.querySelector('.toggle-circle');
            toggle.classList.toggle('bg-blue-600');
            toggle.classList.toggle('bg-gray-300');
            circle?.classList.toggle('translate-x-6');
          }}
          className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors cursor-pointer"
        >
          <span className="toggle-circle absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md"></span>
        </button>
        <span className="text-gray-700 font-medium">Notificaciones</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            const toggle = e.currentTarget;
            const circle = toggle.querySelector('.toggle-circle');
            toggle.classList.toggle('bg-green-600');
            toggle.classList.toggle('bg-gray-300');
            circle?.classList.toggle('translate-x-6');
          }}
          className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors cursor-pointer"
        >
          <span className="toggle-circle absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md"></span>
        </button>
        <span className="text-gray-700 font-medium">Modo oscuro</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            const toggle = e.currentTarget;
            const circle = toggle.querySelector('.toggle-circle');
            toggle.classList.toggle('bg-purple-600');
            toggle.classList.toggle('bg-gray-300');
            circle?.classList.toggle('translate-x-6');
          }}
          className="relative w-14 h-8 bg-purple-600 rounded-full transition-colors cursor-pointer"
        >
          <span className="toggle-circle absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md translate-x-6"></span>
        </button>
        <span className="text-gray-700 font-medium">Autoguardado (activo)</span>
      </div>
    </div>
  );
}`;
