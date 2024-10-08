/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "main": "#7E22CE"
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}