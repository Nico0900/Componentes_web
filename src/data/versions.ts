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
  {
    version: '1.3.0',
    date: '20 de Noviembre, 2024',
    title: 'Mejoras de UI y Preparación para Deployment',
    changes: [
      {
        category: '🚀 Deployment y Documentación',
        items: [
          'Configuración de Firebase Hosting',
          'Agregado archivo CONTRIBUTING.md',
          'Agregado archivo CODEOWNERS para colaboración',
          'Documentación mejorada del proyecto',
        ],
      },
      {
        category: '✨ Mejoras en la Interfaz',
        items: [
          'Mejoras en ComponentCard para mejor visualización',
          'Optimizaciones en ComponentGalleryOptimized',
          'Mejoras en el sistema de Modal',
          'Refinamiento del Navbar',
        ],
      },
      {
        category: '🔧 Optimizaciones',
        items: [
          'Optimización de rendimiento en la galería',
          'Mejora en la carga de componentes',
          'Correcciones de bugs menores',
        ],
      },
    ],
  },
  {
    version: '1.2.0',
    date: '19 de Noviembre, 2024',
    title: 'Optimización y Componentes JavaScript',
    changes: [
      {
        category: '📦 Nuevos Componentes JavaScript',
        items: [
          'AccordionJS1-3: Componentes de acordeón con JavaScript vanilla',
          'AlertJS1-6: Alertas con JavaScript puro',
          'BadgeJS1-3: Badges con JavaScript',
          'ButtonJS1-6: Botones interactivos con JavaScript',
          'CardJS1-6: Cards con JavaScript',
          'DropdownJS1-3: Dropdowns funcionales',
          'FormJS1-3: Formularios con JavaScript',
          'InputJS1-3: Inputs con validación JavaScript',
          'LoadingJS1-3: Indicadores de carga',
          'ModalJS1-3: Modales con JavaScript vanilla',
          'PaginationJS1-3: Paginación interactiva',
          'TableJS1-2: Tablas con JavaScript',
          'TabsJS1-3: Sistema de tabs',
          'ToggleJS1-3: Switches y toggles',
        ],
      },
      {
        category: '⚡ Componentes Loading Extendidos',
        items: [
          'Loading16-129: 114 nuevos componentes de loading',
          'Variedad de estilos: spinners, dots, bars, waves',
          'Animaciones CSS complejas',
          'Diferentes colores y tamaños',
        ],
      },
      {
        category: '🔧 Optimizaciones',
        items: [
          'Implementación de OptimizedLazyCard para mejor rendimiento',
          'Sistema de lazy loading mejorado',
          'Separación de componentsData.ts para mejor organización',
          'Mejoras en el sistema de importación dinámica',
        ],
      },
      {
        category: '🐛 Correcciones',
        items: [
          'Corrección de errores en Carousels',
          'Mejoras en Forms',
          'Correcciones en Modals',
          'Ajustes en Pagination',
        ],
      },
    ],
  },
  {
    version: '1.1.0',
    date: '17 de Noviembre, 2024',
    title: 'Gran Expansión de Componentes',
    changes: [
      {
        category: '🎨 Nuevas Categorías de Componentes',
        items: [
          'Accordions (1-15): Componentes de acordeón expandibles',
          'Carousels (1-15): Carruseles de imágenes',
          'Forms (1-15): Formularios completos',
          'Inputs (1-15): Campos de entrada variados',
          'Loadings (1-15): Indicadores de carga',
          'Modals (1-15): Ventanas modales',
          'Navbars (1-15): Barras de navegación',
          'Notifications (1-15): Notificaciones y toasts',
          'Pagination (1-15): Paginación de contenido',
          'Search (1-15): Barras de búsqueda',
          'Stats (1-15): Tarjetas de estadísticas',
          'Tables (1-15): Tablas de datos',
          'Timelines (1-15): Líneas de tiempo',
          'Tooltips (1-15): Tooltips informativos',
        ],
      },
      {
        category: '🔘 Expansión de Componentes Existentes',
        items: [
          'Alerts (7-15): 9 nuevos componentes de alerta',
          'Badges (7-15): 9 nuevos componentes de badge',
          'Buttons (7-15): 9 nuevos componentes de botón',
          'Cards (7-15): 8 nuevos componentes de card',
        ],
      },
      {
        category: '✨ Componentes Especializados',
        items: [
          'Checkbox: Sistema de checkboxes personalizado',
          'CheckboxInput: Inputs de checkbox avanzados',
          'CircularProgress: Barras de progreso circulares',
          'Dropdown: Menús desplegables',
          'LinearProgress: Barras de progreso lineales',
          'Progress: Indicadores de progreso',
          'RadioButton: Botones de radio',
          'ToggleSwitch: Interruptores toggle',
        ],
      },
      {
        category: '🎯 Mejoras',
        items: [
          'ComponentGallery: Sistema de galería completo',
          'Toast: Sistema de notificaciones',
          'Mejoras en el sistema de filtrado',
          'Optimización de estilos globales',
        ],
      },
    ],
  },
  {
    version: '1.0.0',
    date: '15 de Noviembre, 2024',
    title: 'Lanzamiento Inicial',
    changes: [
      {
        category: '🎉 Lanzamiento',
        items: [
          'Primera versión de BibliotecaUI',
          'Sistema de galería de componentes con Astro y React',
          'Tema galaxia con animaciones de fondo',
        ],
      },
      {
        category: '🎨 Componentes Iniciales',
        items: [
          'Alert (1-6): Componentes de alerta básicos',
          'Badge (1-6): Componentes de badge',
          'Button (1-7): Botones con diferentes estilos',
          'Card (1-7): Tarjetas de contenido',
        ],
      },
      {
        category: '🌟 Características',
        items: [
          'GalaxyBackground: Fondo animado con efecto galaxia',
          'StarField: Campo de estrellas animado',
          'Navbar: Barra de navegación responsive',
          'Modal: Sistema de modales básico',
          'ComponentCard: Tarjetas para mostrar componentes',
        ],
      },
      {
        category: '⚙️ Tecnologías',
        items: [
          'Astro 5.15.7',
          'React 19',
          'TypeScript',
          'Tailwind CSS 4.1.17',
          'Vite',
        ],
      },
    ],
  },
];
