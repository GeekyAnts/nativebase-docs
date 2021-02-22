module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  important: '#tailwind',
  plugins: [],
};
