import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  define: {
    "process.env": process.env,
  },
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'root',
      imo: '2.4.2',
      importMaps: {
        dev: ['src/importmap/importmap.json', "src/importmap/importmap.shared.json"],
      }
    })
  ],
})
