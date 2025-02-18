import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/scss/abstracts/variables.scss";`, // Ojo con la ruta
      },
    },
  },
});
