import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, existsSync, mkdirSync } from 'fs'

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
  },
  plugins: [
    {
      name: 'copy-profile-pdf',
      closeBundle() {
        const src = resolve(__dirname, 'assets/profile.pdf')
        const destDir = resolve(__dirname, 'dist/assets')
        const dest = resolve(destDir, 'profile.pdf')

        if (!existsSync(src)) return

        mkdirSync(destDir, { recursive: true })
        copyFileSync(src, dest)
      }
    }
  ],
  server: {
    allowedHosts: ['localhost', '127.0.0.1']
  }
})
