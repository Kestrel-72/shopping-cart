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
         'header': 'minmax(0px, 200px) minmax(min-content, 1fr) minmax(40px, 200px)',
         'catalog-sm' : 'repeat(auto-fill, minmax(120px, 1fr))',
         'catalog-md' : 'repeat(auto-fill, minmax(200px, 1fr))'
       },
       gridTemplateRows: {
         'catalog-layout': 'max-content 1fr',
       },
       colors: {
         'text-color': '#FFFFFF',
         'uncommon': '#1eff00'
       },
    },
  },
  plugins: [],
}

