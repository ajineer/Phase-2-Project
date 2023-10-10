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
        'Aqua':'#00ffff',
        'Gray':'#808080',
        'Tan':'#d2b48c',
        'Beig':'#f5f5dc',
        'Green':'#32cd32',
        'Red':'#ff0000'
      }
    },
  },
  plugins: [],
}

