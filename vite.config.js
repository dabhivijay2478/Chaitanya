import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/google-client-id": {
        target: "https://server-chaitanya.onrender.com",
        changeOrigin: true,
      },
      "/generate": {
        target: "https://server-chaitanya.onrender.com",
        changeOrigin: true,
      },

    },
  },
});