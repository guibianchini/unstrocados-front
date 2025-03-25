import { defineConfig } from "vite";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), netlifyPlugin()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
