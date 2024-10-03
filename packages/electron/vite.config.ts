import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Set root directory to 'src'
  build: {
    outDir: '../build', // Output the build in the 'build' folder
    rollupOptions: {
      input: {
        main: 'src/main.ts', // Entry point for Electron's main process
        renderer: 'src/renderer.ts', // Entry point for the renderer process (Electron window)
      },
      output: {
        entryFileNames: '[name].js', // Output as main.js and renderer.js
        chunkFileNames: '[name].js', // Names for dynamic imports or shared chunks
        assetFileNames: '[name].[ext]', // Keep asset filenames clean
      },
    },
  },
});
