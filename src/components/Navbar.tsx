/**
 * Navbar Component
 *
 * Desarrollado por: Nicolás Vargas
 * Proyecto: BibliotecaUI - Galería de Componentes Web
 * Licencia: Código libre y de código abierto
 */

import { useState, useEffect } from 'react';
import VersionModal from './VersionModal';
import { versions } from '../data/versions';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [versionModalOpen, setVersionModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (!element) return;

    setMobileMenuOpen(false);

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // 1.5 segundos - más lento y suave
    let start: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-slate-800/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:border-blue-500/30 transition-all duration-300">
              <svg
                className="w-5 h-5 text-blue-400/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold text-slate-200 tracking-tight">
              BibliotecaUI
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => smoothScrollTo('#hero')}
              className="text-slate-400 hover:text-slate-200 transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-800/30"
            >
              Inicio
            </button>
            <button
              onClick={() => smoothScrollTo('#componentes')}
              className="text-slate-400 hover:text-slate-200 transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-800/30"
            >
              Componentes
            </button>
            <button
              onClick={() => smoothScrollTo('#guia')}
              className="text-slate-400 hover:text-slate-200 transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-800/30"
            >
              Guía
            </button>
            <button
              onClick={() => setVersionModalOpen(true)}
              className="text-slate-400 hover:text-slate-200 transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-800/30"
            >
              Versiones
            </button>
            <div className="w-px h-4 bg-slate-800 mx-2"></div>
            <a
              href="https://github.com/Nico0900/Componentes_web"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/30 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-slate-200 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800/30 mt-2 py-4 space-y-1">
            <button
              onClick={() => smoothScrollTo('#hero')}
              className="block w-full text-left text-slate-400 hover:text-slate-200 transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-800/30"
            >
              Inicio
            </button>
            <button
              onClick={() => smoothScrollTo('#componentes')}
              className="block w-full text-left text-slate-400 hover:text-slate-200 transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-800/30"
            >
              Componentes
            </button>
            <button
              onClick={() => smoothScrollTo('#guia')}
              className="block w-full text-left text-slate-400 hover:text-slate-200 transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-800/30"
            >
              Guía
            </button>
            <button
              onClick={() => {
                setVersionModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-400 hover:text-slate-200 transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-slate-800/30"
            >
              Versiones
            </button>
            <div className="pt-2">
              <a
                href="https://github.com/Nico0900/Componentes_web"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/30 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Version Modal */}
      <VersionModal
        isOpen={versionModalOpen}
        onClose={() => setVersionModalOpen(false)}
        versions={versions}
      />
    </nav>
  );
}
