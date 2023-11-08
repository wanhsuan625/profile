/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '60':'240px',
        '80':'320px',
      },
      colors: {
        'pink': '#D46A98',
        'light-blue': '#86B9DF',
        'gray': '#A8A8A8',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
}

