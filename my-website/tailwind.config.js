/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'xs': '480px',
      },
      spacing:{
        '5.5': '22px',
        '13': '52px',
        '15': '60px',
        '17': '68px',
        '18': '72px',
        '65': '260px',
        '100': '400px',
        '110': '440px',
      },
      colors: {
        'pink': '#D46A98',
        'light-blue': '#86B9DF',
        'gray': '#A8A8A8',
      },
      transitionProperty: {
        'width': 'width',
        'max-w': 'max-width',
      },
      width: {
        '62.5': '250px',
      },
      fontSize: {
        '3xl': ['2rem', {
          lineHeight: '2.5rem',
          letterSpacing: '0em',
          fontWeight: '700',
        }],
        '4xl': ['2.5rem', {
          lineHeight: '2.75rem',
          letterSpacing: '0em',
          fontWeight: '700',
        }]
      },
      keyframes: {
        'bounce': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(40%)' },
        }
      },
      minHeight: {
        '18' : '72px',
      }
    },
  },
  plugins: [],
}

