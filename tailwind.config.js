/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#666CA3',
        'dark-blue': '#13183F',
        'gray': '#83869A',
        'dark-pink': '#F74780',
        'pink': '#FFA7C3',
        'white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}