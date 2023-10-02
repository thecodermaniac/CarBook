/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#4a67c6',
        'grayText': '#9D9E9D',
        'secondColor': '#edeff1'
      }
    },
  },
  plugins: [],
}