import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./wwwroot",
  resolve: {
    alias: {
        "/src": resolve(__dirname, "./src"),
        "@assets": resolve(__dirname, 'src/assets')
    },
  },
  build: {
    outDir: resolve(__dirname, "./dist"),
    emptyOutDir: true,
  },
  esbuild: {
    supported: {
        "top-level-await": true,
    },
  },
  server: {
    strictPort: true,
    port: 3000,
  },
})
