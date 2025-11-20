/**
 * ComponentGalleryOptimized Component
 *
 * Desarrollado por: Nicolás Vargas
 * Proyecto: BibliotecaUI - Galería de Componentes Web
 * Licencia: Código libre y de código abierto
 */

import { useState, useMemo, useEffect } from 'react';
import OptimizedLazyCard from './OptimizedLazyCard';
import { componentsData } from '../data/componentsData';

const TECHNOLOGIES = ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS'];

// Tech Icon Component for Filters
function TechIcon({ name, isActive }: { name: string; isActive: boolean }) {
  const activeClass = isActive ? 'scale-110' : 'group-hover:scale-110';
  const transitionClass = 'transition-transform';

  switch (name) {
    case 'JavaScript':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#F7DF1E"/>
          <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#3178C6"/>
          <path fill="#FFF" d="M56.612 128.85l-.081 10.483h33.32v94.68H113.42v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.4-.244-44.983-.203l-44.739.122-.122 10.443Zm149.955-10.742c6.501 1.625 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.111 6.136 8.208.08.325-11.053 7.802-17.798 11.988-.244.162-1.22-.894-2.317-2.52-3.291-4.795-6.745-6.867-12.028-7.233-7.76-.528-12.759 3.535-12.718 10.321 0 1.992.284 3.17 1.097 4.795 1.707 3.536 4.876 5.649 14.832 9.956 18.326 7.883 26.168 13.084 31.045 20.48 5.445 8.249 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.879-28.323 20.276-4.388.772-14.79.65-19.504-.203-10.28-1.828-20.033-6.908-26.047-13.572-2.357-2.6-6.949-9.387-6.664-9.874.122-.163 1.178-.813 2.356-1.504 1.138-.65 5.446-3.129 9.509-5.485l7.355-4.267 1.544 2.276c2.154 3.29 6.867 7.801 9.712 9.305 8.167 4.307 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.501-1.99-2.845-6.054-5.242-17.595-10.24-13.206-5.69-18.895-9.224-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.617-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.659 26.25-24.3 4.51-.853 14.994-.528 19.424.569Z"/>
        </svg>
      );
    case 'React':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="-11.5 -10.232 23 20.463">
          <circle r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className={`w-10 h-10 ${transitionClass} ${activeClass}`} viewBox="0 0 256 154">
          <defs>
            <linearGradient id="tailwindLogo1" x1="-2.778%" x2="100%" y1="32%" y2="67.556%">
              <stop offset="0%" stopColor="#2298BD"/>
              <stop offset="100%" stopColor="#0ED7B5"/>
            </linearGradient>
          </defs>
          <path fill="url(#tailwindLogo1)" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function ComponentGalleryOptimized() {
  const components = componentsData;
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string>('All');
  const [isClient, setIsClient] = useState(false);

  // Mark when component is mounted on client to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get unique categories for filters
  const componentCategories = useMemo(() => {
    const categories = Array.from(new Set(components.map(comp => comp.category)));
    return ['All', ...categories.sort()];
  }, [components]);

  const filteredComponents = useMemo(() => {
    const filtered = components.filter((component) => {
      const matchesTechnology = !selectedTechnology || component.technologies.includes(selectedTechnology);
      const matchesComponent = selectedComponent === 'All' || component.category === selectedComponent;
      return matchesTechnology && matchesComponent;
    });

    // Only randomize on client side after hydration when "All" is selected
    if (selectedComponent === 'All' && isClient) {
      return [...filtered].sort(() => Math.random() - 0.5);
    }

    return filtered;
  }, [components, selectedTechnology, selectedComponent, isClient]);

  const handleDownload = (code: string, title: string) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Technology Filters */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        {TECHNOLOGIES.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTechnology(selectedTechnology === tech ? null : tech)}
            className={`flex flex-col items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm group cursor-pointer min-w-[100px] ${
              selectedTechnology === tech
                ? 'bg-blue-600/30 border-2 border-blue-500/70'
                : 'bg-slate-800/40 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50'
            }`}
          >
            <TechIcon name={tech} isActive={selectedTechnology === tech} />
            <span className={`text-xs font-medium transition-colors ${
              selectedTechnology === tech ? 'text-blue-300' : 'text-slate-400 group-hover:text-slate-200'
            }`}>
              {tech}
            </span>
          </button>
        ))}
      </div>

      {/* Component Category Filters */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        {componentCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedComponent(category)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
              selectedComponent === category
                ? 'bg-blue-600/40 text-blue-200 border border-blue-500/50'
                : 'bg-slate-800/40 text-slate-400 hover:text-slate-200 border border-slate-700/30 hover:border-slate-600/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Components Grid - Masonry Layout */}
      {filteredComponents.length > 0 ? (
        <div className="w-full">
          <style>{`
            @media (min-width: 768px) {
              .masonry-container {
                column-count: 2;
              }
            }
            @media (min-width: 1280px) {
              .masonry-container {
                column-count: 3;
              }
            }
            .masonry-item {
              break-inside: avoid;
              margin-bottom: 2rem;
              display: inline-block;
              width: 100%;
            }
          `}</style>
          <div className="masonry-container" style={{ columnGap: '2rem' }}>
            {filteredComponents.map((item, index) => {
              // Optimize animation delays - max 50ms, faster initial load
              const delay = Math.min(index * 15, 50);

              return (
                <div key={item.id} className="masonry-item">
                  <OptimizedLazyCard
                    item={item}
                    delay={delay}
                    onDownload={handleDownload}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-full text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-800/50 border border-slate-700/50">
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p className="text-slate-400 text-base font-medium">No se encontraron componentes con estos filtros</p>
          <p className="text-slate-500 text-sm mt-2">Intenta ajustar los filtros de búsqueda</p>
        </div>
      )}
    </div>
  );
}
