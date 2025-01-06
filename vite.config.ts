// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     "proxy": {
//       "/api": {
//         target: "https://www.swiggy.com/dapi/restaurants/list/v5",
//         changeOrigin: true,
//         secure: false,
//       },
//     }
//   }
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v5': {
        target: 'https://www.swiggy.com', // Base Swiggy domain
        changeOrigin: true, // Ensure the Host header matches the target
        rewrite: (path) => path.replace(/^\/v5/, '/dapi/restaurants/list/v5'), // Rewrite `/v5` to the full API path
      },
    },
  },
});
