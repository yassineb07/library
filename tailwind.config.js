const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./dist/*.html', './src/*.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFill: 'repeat(auto-fill, minmax(15rem, 1fr))',
        autoFit: 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
