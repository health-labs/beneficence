/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter var', 'Raleway', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'bene-green-blue': '#4CEBD1',
        'bene-light-blue': '#168AF4',
        'bene-dark-blue': '#003D84',
        'bene-very-light-blue': '#AEE1F7',
        'bene-nav-blue': '#015EA1',
      },
      fontSize: {
        '7xl': '2.6rem',
        bxl: '1.5rem',
      },
      spacing: {
        'per-7': '7%',
        'per-15': '15%',
        'per-20': '20%',
        'per-25': '25%',
        'per-30': '30%',
        'per-35': '35%',
        'per-40': '40%',
        'per-45': '45%',
        'per-50': '50%',
        'per-55': '55%',
        'per-60': '60%',
        'per-65': '65%',
        'per-70': '70%',
        'per-75': '75%',
        'per-80': '80%',
        'per-85': '85%',
        'per-90': '90%',
        'per-95': '95%',
        'per-100': '100%',

        'cust-14': '14px',
        'cust-16': '16px',
        'cust-18': '18px',
        'cust-20': '20px',
        'cust-22': '22px',
        'cust-24': '24px',
        'cust-26': '26px',
        'cust-28': '28px',
        'cust-30': '30px',
        'cust-32': '32px',
        'cust-34': '34px',

        'beat-1': '-4.5vw',
      },
      margin: {
        'cust-32': '32px',
      },
      padding: {
        'cust-btn': '10px',
      },
      minWidth: {
        whole: '100vw !important',
      },
      maxWidth: {
        'em-10': '10em',
      },
      borderRadius: {
        'bene-1': '22px',
      },
    },
  },
  variants: {
    extend: {},
  },
};
