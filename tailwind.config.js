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
         'catalog-sm' : 'repeat(auto-fit, minmax(120px, 1fr))',
         'catalog-md' : 'repeat(auto-fit, minmax(200px, 1fr))'
       },
       gridTemplateRows: {
         'catalog-layout': 'max-content 1fr',
         'item-layout': '1fr 1fr 1fr 2fr'
       },
       colors: {
         'text-color': '#FFFFFF',
         'uncommon': '#1eff00'
       },
       boxShadow: {
         'blur': 'box-shadow: inset 0px 0px 4px 4px #DBA632;',
         'button': ' inset 0 0 20px 0px rgba(0, 0, 0, 0.2)',
       }
    },
  },
  plugins: [],
}

