/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'appFont': ['Arial', 'Helvetica', 'sans-serif']
    },
    extend: {
      colors:{
        'Aqua':'#8CD0D1',
        'Gray':'#333E52',
        'Tan':'#524433',
        'Beig':'#D1B28C',
        'Sky': '#8CA5D1',
        'Green':'#32cd32',
        'Red':'#ff0000'
      },
      backgroundImage:{
        'home_page':'url("/src/assets/pantry.jpg")'
      }
    },
  },
  plugins: [],
}

