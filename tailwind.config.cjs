/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        "dark-green": "#13322B",
        "light-white": "rgba(255, 255, 255, 0.17)",
      },
    },
  },
  plugins: [],
}
