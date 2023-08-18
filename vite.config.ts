import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3310,
  },
  // 配置别名
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
