import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/coder-react-ejclases/", // 👈 usa el nombre exacto de tu repo en GitHub
  plugins: [react()],
});
