/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'amatic-sc' : "'Amatic SC', cursive",
        'vt323' : "'VT323', monospace",        
      },
      colors: {
        'base-color': '#1d1d1f'
      }
    },
  },
  plugins: [],
}

