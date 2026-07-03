import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        offers: resolve(__dirname, 'offers.html'),
        investors: resolve(__dirname, 'investors.html'),
        suppliers: resolve(__dirname, 'suppliers.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
})
