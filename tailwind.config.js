const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFill: 'repeat(auto-fill, minmax(15rem, 1fr))',
        autoFit: 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      teal: colors.teal,
      red: colors.red,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
