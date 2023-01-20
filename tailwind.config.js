/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ], theme: {
    extend: {
      colors: {
        primary: '#0F808C',
        secondary: '#1C697A',
        tetiary: '#46B2C8',
        light: '#C2E2E9',
        grey: '#f1f1f1',
        dark: '#023A59',
        faded: '#C4C4C4',
        faintGrey: '#828282',
        mediumGrey: '#ACB6BE',
        deepGrey: '#999999',
        blue: '#3056D3',
        lightgrey: '#FDFDFD'
      },
      fontFamily: {
        'Sonoma': ['Sonoma'],
        'Euclid': ["Euclid"]
      }
    },

  },
  plugins: [],
}
