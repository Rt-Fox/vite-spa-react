import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import vitePluginSingleSpa from "vite-plugin-single-spa";
// import externalize from "vite-plugin-externalize-dependencies";
import vitePluginReactHMR from "vite-plugin-react-single-spa-hmr";

const APPLICATION_EXTERNALS: string[] = [];
// const NPM_EXTERNALS: string[] = ["react", "react-dom"];

export default defineConfig(({ command }) => ({
  base: '/',
  plugins: [
    react(),
    // command === "serve" ensures this plugin is only used during development (excluded from builds)
    command === "serve" && vitePluginReactHMR('src/spa.tsx'),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 3001,
      spaEntryPoints: 'src/spa.tsx',
    }),
    // externalize({ externals: APPLICATION_EXTERNALS }),
  ],
  server: {
    hmr: false
  },
  // build: {
  //   rollupOptions: { external: [...NPM_EXTERNALS] },
  // },
}));
