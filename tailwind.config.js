/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
         // Complex site-specific column configuration
         'header': '200px minmax(400px, 1fr) 200px',
       },
       colors: {
         'text-color': '#FFFFFF',
         'uncommon': '#1eff00'
       },
    },
  },
  plugins: [],
}

