import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.1.134',  // 또는 특정 IP 주소로 변경 가능
  //   port: 5173
  // }
})
