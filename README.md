# Galería de Componentes Web

Una galería interactiva de componentes web reutilizables construida con **Astro**, **React** y **Tailwind CSS**.

## Características

- **Visualización en Cards**: Cada componente se muestra en una tarjeta con preview en vivo
- **Modal de Código**: Ver el código completo de cada componente en un modal elegante
- **Copiar al Portapapeles**: Copiar el código con un solo clic
- **Descarga Directa**: Descargar componentes como archivos `.tsx`
- **Responsive**: Diseño totalmente adaptable a todos los dispositivos
- **TypeScript**: Código type-safe para mayor confiabilidad

## Componentes Incluidos

1. **Botones** - Colección de botones con diferentes estilos (primary, secondary, success, danger)
2. **Tarjetas** - Componente de tarjeta moderno con imagen y contenido
3. **Alertas** - Mensajes informativos, de éxito y error
4. **Badges** - Etiquetas coloridas para estados y categorías

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

Código abierto - Libre de usar para cualquier propósito
