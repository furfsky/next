module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Minecraft'],
    },
    extend: {
      colors: {
        gold: {
          400: '#fbcc6c',
          500: '#ffaa00',
          600: '#c87333',
          700: '#441a08',
          800: '#2a2a00', // this color doesn't align with anything else
        },
        lilac: {
          400: '#d48af1',
          600: '#683d8d',
        },
        pale: {
          400: '#383838',
          500: '#444a71',
          600: '#2c354d',
          700: '#1c1d30',
        },
      },
    },
  },
  plugins: [],
};
