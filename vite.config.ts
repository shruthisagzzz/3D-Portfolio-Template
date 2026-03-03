import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.glb', '.gltf']
  },
  server: {
    strictPort: true,
    port: 5173
  }
})
