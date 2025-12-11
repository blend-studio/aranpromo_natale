/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aranRed: '#8B0000',
        aranBlack: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Avenir', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}