/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(47, 47, 47, 0.98)',
        'custom-dark': '#011117',
      },
    },
  },
  plugins: [],
}