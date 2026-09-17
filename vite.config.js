import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite build/dev-server configuration.
// `defineConfig` just gives editor autocomplete/type-checking for this
// object -- it doesn't change behavior on its own.
//
// The react() plugin is what lets Vite understand JSX syntax and enables
// Fast Refresh (component state survives an edit during `npm run dev`,
// instead of a full page reload on every save).
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
