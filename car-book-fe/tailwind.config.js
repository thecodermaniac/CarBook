/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#4a67c6',
        'grayText': '#9D9E9D'
      }
    },
  },
  plugins: [],
}