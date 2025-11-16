import { useState, useEffect, useRef } from 'react';

export default function DropdownExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Seleccionar opción');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Custom Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Framework
        </label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 text-left focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 flex items-center justify-between"
        >
          <span className={selected === 'Seleccionar opción' ? 'text-slate-500' : ''}>
            {selected}
          </span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-2.5 text-left text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors duration-200 first:pt-3 last:pb-3"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Native Select */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          País
        </label>
        <select className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300">
          <option value="">Seleccionar país</option>
          <option value="es">España</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
          <option value="co">Colombia</option>
        </select>
      </div>
    </div>
  );
}

export const dropdownCode = `import { useState, useEffect, useRef } from 'react';

export default function DropdownExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Seleccionar opción');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Custom Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Framework
        </label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 text-left focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 flex items-center justify-between"
        >
          <span className={selected === 'Seleccionar opción' ? 'text-slate-500' : ''}>
            {selected}
          </span>
          <svg
            className={\`w-4 h-4 text-slate-500 transition-transform duration-200 \${
              isOpen ? 'rotate-180' : ''
            }\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-2.5 text-left text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors duration-200 first:pt-3 last:pb-3"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Native Select */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          País
        </label>
        <select className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300">
          <option value="">Seleccionar país</option>
          <option value="es">España</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
          <option value="co">Colombia</option>
        </select>
      </div>
    </div>
  );
}`;
