import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [react()],
  server: {
    proxy:{
      '/api': {
        target: 'http://192.168.13.146:3000',
        secure: false,  
      } ,
    },
  },
  plugins: [react()],  
});