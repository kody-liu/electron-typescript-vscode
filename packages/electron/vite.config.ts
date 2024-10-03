import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Set root directory to 'src'
  build: {
    outDir: '../build', // Output the build in the 'build' folder
    rollupOptions: {
      input: {
        main: 'src/index.html', // Explicitly specify the entry point
      },
      output: {
        entryFileNames: 'main.js', // Set the output file name for the main entry
        chunkFileNames: '[name].js', // Set names for other chunks
        assetFileNames: '[name].[ext]', // Keep asset filenames clean
      },
    },
  },
});
