// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   base: "/",
//   root: path.resolve(__dirname, "client"),
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "client/src"),
//       "@shared": path.resolve(__dirname, "shared"),
//       "@assets": path.resolve(__dirname, "attached_assets"),
//     },
//   },
//   build: {
//     outDir: "dist",
//     emptyOutDir: true,
//   },
//   server: {
//     historyApiFallback: true,
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'client'), // Tells Vite your HTML and React app are inside 'client'
  base: '/myPortfolio/', // Matches your GitHub Pages repository subfolder layout
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Pushes build assets back up to a shared root 'dist' folder
    emptyOutDir: true,
  },
});
