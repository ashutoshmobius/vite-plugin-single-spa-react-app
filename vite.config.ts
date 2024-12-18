import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginSingleSpa from 'vite-plugin-single-spa';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 5002,
      spaEntryPoints: 'src/spa.tsx'//export a parcel by default point to src/spa/js
      // projectId?: string;
      // cssStrategy?: "singleMife" | "multiMife" | "none";
      // assetFileNames?: string;
  }),
  ],
  server: {
    port: 5002, // Svelte micro-frontend runs on port 5001
  },
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      input: "src/spa.tsx",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "spa.js",
      }
    }
  }
})
