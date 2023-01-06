module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#288CB3',
          surface: '#D4E8F0',
          border: '#B7D9E6',
          hover: '#217595',
          pressed: '#14465A',
          focus: 'rgba(40, 140, 179, 0.1)',
        },
        secondary: {
          main: '#E50000',
          surface: '#FACCCC',
          border: '#F6AAAA',
          hover: '#BF0000',
          pressed: '##720000',
          focus: 'rgba(229, 0, 0, 0.2)',
        },
        brand: {
          red: '#ED1C24',
          white: '#FFFFFF',
          grey: '#5E6061',
        },
        background: {
          DEFAULT: '#FFFFFF',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
