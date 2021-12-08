module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}', './src/'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')
],
};
