/**
 * Versions Data
 *
 * Desarrollado por: Nicolás Vargas
 * Proyecto: BibliotecaUI - Galería de Componentes Web
 * Licencia: Código libre y de código abierto
 */

export interface Version {
  version: string;
  date: string;
  title: string;
  changes: {
    category: string;
    items: string[];
  }[];
}

export const versions: Version[] = [
  {
    version: '2.0.0',
    date: '23 de Noviembre, 2024',
    title: 'Gran Actualización: 90 Nuevos Componentes',
    changes: [
      {
        category: '🎨 Nuevos Componentes Alert',
        items: [
          'Alert7-16: Componentes con TypeScript + React + Tailwind CSS',
          'AlertJS7-16: Componentes con JavaScript + React + Tailwind CSS',
          'AlertCSS1-10: Componentes con animaciones CSS puras',
          'Total: 30 nuevos componentes de alertas',
        ],
      },
      {
        category: '🏷️ Nuevos Componentes Badge',
        items: [
          'Badge7-16: Componentes con TypeScript + React + Tailwind CSS',
          'BadgeJS7-16: Componentes con JavaScript + React + Tailwind CSS',
          'BadgeCSS1-10: Componentes con animaciones CSS puras',
          'Total: 30 nuevos componentes de badges',
        ],
      },
      {
        category: '🔘 Nuevos Componentes Button',
        items: [
          'Button8-14, 16-17: Componentes con TypeScript + React + Tailwind CSS',
          'ButtonJS7-14, 16: Componentes con JavaScript + React + Tailwind CSS',
          'ButtonCSS1-10: Componentes con animaciones CSS puras',
          'Total: 28 nuevos componentes de botones',
        ],
      },
      {
        category: '📦 Reorganización de Componentes',
        items: [
          'Button15 movido a la sección Toggles como toggle-1',
          'ButtonJS15 movido a la sección Dropdowns como dropdown-js-4',
          'Mejor organización por categorías',
        ],
      },
      {
        category: '✨ Mejoras en la Interfaz',
        items: [
          'Agregado filtro de tecnología CSS3 con icono oficial',
          'Iconos de tecnología en las tarjetas de componentes',
          'Nuevo orden de filtros: CSS, JavaScript, TypeScript, React, Tailwind CSS',
          'Corrección de capitalización en importaciones dinámicas (JS/CSS)',
        ],
      },
      {
        category: '🔧 Mejoras Técnicas',
        items: [
          'Optimización de la función getComponentFileName para mejor manejo de nombres',
          'Soporte mejorado para componentes con múltiples tecnologías',
          'Sistema de importación dinámica más robusto',
        ],
      },
    ],
  },
  // Puedes agregar más versiones aquí en el futuro
  // {
  //   version: '1.0.0',
  //   date: 'Fecha anterior',
  //   title: 'Lanzamiento Inicial',
  //   changes: [...]
  // },
];
