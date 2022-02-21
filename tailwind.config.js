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

        'bene-cmp-sky-blue': 'rgba(22, 138, 244, 0.2)',
        'bene-cmp-violet': 'rgba(93, 22, 244, 0.2)',
        'bene-cmp-green': 'rgba(74, 222, 128, 0.2)',
        'bene-cmp-rosy-red': 'rgba(251, 113, 133, 0.2)',
        'bene-cmp-emerald': 'rgba(52, 211, 153, 0.2)',
        'bene-cmp-blue': 'rgba(96, 165, 250, 0.2)',
        'bene-cmp-purple': 'rgba(192, 132, 252, 0.2)',
        'bene-cmp-pink': 'rgba(244, 114, 182, 0.2)',
        'bene-cmp-cyan': 'rgba(34, 211, 238, 0.2)',
        'bene-cmp-grey': 'rgba(148, 163, 184, 0.2)',
        'bene-cmp-violet-lt': 'rgba(232, 121, 249, 0.2)',

        'bene-nav-opt': 'rgba(255, 255, 255, 0.55)',
        'bene-nav-hopt': 'rgba(255, 255, 255, 0.75)',
      },
      fontSize: {
        '7xl': '2.6rem',
        bxl: '1.5rem',
        cmpheading: '1rem',
        'cmpdesc-shrt': '0.7rem',
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
        'cust-45': '45px',

        'beat-1': '-4.5vw',
      },
      margin: {
        'cust-32': '32px',
        'e-1': '1em',
      },
      padding: {
        'cust-btn': '10px',
        'cust-xx': '14px',

        'cust-r-2': '2em',
        'cust-r-3': '3em',
        'cust-r-4': '4em',
        'cust-r-5': '5em',
        'cust-r-6': '6em',
      },
      minWidth: {
        whole: '100vw !important',
        'per-55': '40%',
      },
      maxWidth: {
        'em-16': '16em',
        'em-15': '15em',
        'em-10': '10em',
        'em-5': '5em',
        'em-7': '7em',
        'em-3': '3em',
        'em-1-hf': '1.5em',

        content: 'max-content',

        'px-30': '30px',
      },
      maxHeight: {
        'px-425': '425px',
      },
      borderRadius: {
        'bene-1': '22px',
        'bene-c-1': '24px',
        'bene-c-2': '14px',
      },
      backgroundImage: {
        'bene-wavy-bg': 'url(./assets/wavy-bg-big.svg)',
        'bene-beat-bg': 'url(./assets/bene-beat.svg)',
        'bene-quote': 'url(./assets/mp-quote-bg.png)',
      },
      boxShadow: {
        'c-1': '0px 6px 33px rgba(0, 0, 0, 0.16)',
      },
      rotate: { 360: '360deg' },
    },
  },
  variants: {
    extend: {},
  },
};
