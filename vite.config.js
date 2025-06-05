import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    host: '0.0.0.0',  // Permite conexões externas
    port: 5173,        // Certifique-se de que a porta é 5173 ou outra de sua escolha
  },
});
