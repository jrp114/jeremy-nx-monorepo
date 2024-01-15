module.exports = {
  prefix: 'tw-',
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        primary: '#a0aec0',
        countries: {
          dark: {
            background: 'hsl(207, 26%, 17%)',
            elemement: 'hsl(209, 23%, 22%)',
            text: 'hsl(0, 0%, 100%)',
          },
          light: {
            background: 'hsl(0, 0%, 98%)',
            elemement: 'hsl(0, 0%, 100%)',
            text: 'hsl(200, 15%, 8%)',
          },
        },
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        '2xs': '.6rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
