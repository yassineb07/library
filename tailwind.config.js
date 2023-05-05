const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {},
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
