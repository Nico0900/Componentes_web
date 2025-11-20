# Galería de Componentes Web

> **Proyecto en desarrollo** - Código libre y de código abierto

Una galería interactiva de componentes web reutilizables construida con **Astro**, **React** y **Tailwind CSS**.

**Desarrollado por:** Nicolás Vargas

## Características

- **Visualización en Cards**: Cada componente se muestra en una tarjeta con preview en vivo
- **Modal de Código**: Ver el código completo de cada componente en un modal elegante
- **Copiar al Portapapeles**: Copiar el código con un solo clic
- **Descarga Directa**: Descargar componentes como archivos `.tsx`
- **Responsive**: Diseño totalmente adaptable a todos los dispositivos
- **TypeScript**: Código type-safe para mayor confiabilidad

## Componentes Incluidos

Este proyecto incluye una amplia variedad de componentes web profesionales:

- **Botones** - 7+ variantes con diferentes estilos y efectos
- **Tarjetas (Cards)** - 7+ diseños modernos con diferentes layouts
- **Alertas** - 6+ estilos para diferentes tipos de mensajes
- **Badges** - 6+ variaciones para etiquetas y estados
- **Inputs** - 5+ tipos de campos de entrada con validación
- **Tablas** - 15+ diseños responsivos y funcionales
- **Navegación** - 15+ componentes de navbar y menús
- **Tooltips** - 15+ estilos de información contextual
- **Forms** - Múltiples ejemplos de formularios completos
- **Timelines** - Componentes para mostrar cronologías
- **Estadísticas** - Componentes para visualizar datos
- **Checkboxes, Radio Buttons, Toggle Switches** - Elementos de formulario interactivos
- **Progress Bars** - Barras de progreso lineales y circulares
- **Y muchos más...**

## Comenzar

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Estructura del Proyecto

```
/
├── src/
│   ├── components/
│   │   ├── ComponentCard.tsx      # Card para mostrar componentes
│   │   ├── Modal.tsx              # Modal para código
│   │   └── examples/              # Componentes de ejemplo
│   │       ├── ButtonExample.tsx
│   │       ├── CardExample.tsx
│   │       ├── AlertExample.tsx
│   │       └── BadgeExample.tsx
│   ├── pages/
│   │   └── index.astro           # Página principal
│   └── styles/
│       └── global.css            # Estilos globales de Tailwind
├── public/                       # Archivos estáticos
└── astro.config.mjs             # Configuración de Astro
```

## Agregar Nuevos Componentes

1. Crea un nuevo archivo en `src/components/examples/`:

```tsx
// src/components/examples/MiComponente.tsx
export default function MiComponente() {
  return (
    <div>
      {/* Tu componente */}
    </div>
  );
}

export const miComponenteCode = `// Código del componente como string`;
```

2. Importa y agrega a la galería en `src/pages/index.astro`:

```astro
---
import MiComponente, { miComponenteCode } from '../components/examples/MiComponente';
---

<ComponentCard
  client:load
  title="Mi Componente"
  description="Descripción del componente"
  previewComponent={<MiComponente />}
  code={miComponenteCode}
  category="Categoría"
/>
```

## Tecnologías

- [Astro](https://astro.build) - Framework web
- [React](https://react.dev) - Biblioteca UI
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS
- [TypeScript](https://www.typescriptlang.org) - Tipado estático

## Licencia

Este proyecto es **código libre y de código abierto**. Puedes usar, modificar y distribuir este código para cualquier propósito, ya sea personal o comercial.

## Estado del Proyecto

🚧 **En desarrollo activo** - Se están agregando nuevos componentes y mejoras regularmente.

## Autor

**Nicolás Vargas**
- GitHub: [@Nico0900](https://github.com/Nico0900)

## Contribuciones

Las contribuciones son bienvenidas. Este es un proyecto de código abierto y cualquier mejora o nuevo componente será apreciado.
