// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],

    build: {
      // Reducir el tamaño de chunks
      chunkSizeWarningLimit: 500,

      // Optimización de módulos
      modulePreload: true,

      rollupOptions: {
        output: {
          // Code splitting manual para separar componentes
          manualChunks(id) {
            // React y dependencias en un chunk separado
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }

            // Cada componente Example en su propio chunk
            if (id.includes('/examples/') && id.includes('Example')) {
              const match = id.match(/\/([^/]+Example)\.tsx/);
              if (match) {
                return `component-${match[1]}`;
              }
            }

            // Componentes de UI base
            if (id.includes('/components/') &&
                (id.includes('Galaxy') || id.includes('Navbar') || id.includes('Background'))) {
              return 'ui-components';
            }

            // Datos de componentes
            if (id.includes('componentsData')) {
              return 'components-data';
            }
          },

          // Nombres de chunk más pequeños para producción
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
            return `assets/[name]-[hash].js`;
          },

          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      },

      // Minificación agresiva
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Eliminar console.logs en producción
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info'],
          passes: 2
        },
        mangle: {
          safari10: true
        },
        format: {
          comments: false
        }
      },

      // Optimizar CSS
      cssMinify: true,

      // Source maps solo en desarrollo
      sourcemap: false
    },

    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: []
    },

    // Cache
    cacheDir: 'node_modules/.vite'
  },

  // Comprimir HTML
  compressHTML: true
});
