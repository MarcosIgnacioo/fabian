import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // DESCOMENTAR ESTO CUANDO DEPLOY PORQUE EN LOCAL T HACE COSAS LOKITAS
  // base: `/deploy`,
})
