/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-mocha': '#8D7252',
        'medium-dark-mocha': '#9F8469',
        'medium-mocha': '#B39B84',
        'light-mocha': '#CAB69D',
        'very-light-mocha': '#EAD9BD',
        'pale-mocha': '#F9EED9',
      },
      fontFamily: {
        sans: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}