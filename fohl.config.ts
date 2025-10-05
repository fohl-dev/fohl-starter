import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "fohl"

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
})
