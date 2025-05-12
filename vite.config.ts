import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Import supprimé

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Plugin componentTagger supprimé
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
