/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  important: true,
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

        'bene-dark-blue-75': '#003D84BF',

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

        'bene-f-sky-blue': 'rgba(22, 138, 244)',
        'bene-f-violet': 'rgba(93, 22, 244)',
        'bene-f-green': 'rgba(74, 222, 128)',
        'bene-f-rosy-red': 'rgba(251, 113, 133)',
        'bene-f-emerald': 'rgba(52, 211, 153)',
        'bene-f-blue': 'rgba(96, 165, 250)',
        'bene-f-purple': 'rgba(192, 132, 252)',
        'bene-f-pink': 'rgba(244, 114, 182)',
        'bene-f-cyan': 'rgba(34, 211, 238)',
        'bene-f-grey': 'rgba(148, 163, 184)',
        'bene-f-violet-lt': 'rgba(232, 121, 249)',

        'bene-nav-opt': 'rgba(255, 255, 255, 0.55)',
        'bene-nav-hopt': 'rgba(255, 255, 255, 0.75)',

        'bene-overlay-backdrop': 'rgba(0, 0, 0, 0.86)',
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
        'beat-2': '60vw',

        'vw-33': '33vw',
        'vw-80': '80vw',

        em27: '27em',

        '33rem': '33rem',
      },
      margin: {
        'cust-32': '32px',

        'e-1': '1em',

        'ne-2': '-2em',
        n100: '-100%',

        auto0: 'auto 0',
      },
      padding: {
        'cust-btn': '10px',
        'cust-xx': '14px',

        'cust-r-2': '2em',
        'cust-r-3': '3em',
        'cust-r-4': '4em',
        'cust-r-5': '5em',
        'cust-r-6': '6em',

        'per-5': '5%',
      },
      minWidth: {
        quarter: '25vw',
        whole: '100vw !important',
        'per-30': '30%',
        'per-55': '40%',

        'em-20': '20em',

        '30px': '30px',
      },
      maxWidth: {
        'em-16': '16em',
        'em-15': '15em',
        'em-10': '10em',
        'em-5': '5em',
        'em-7': '7em',
        'em-3': '3em',
        'em-1-hf': '1.5em',
        'em-24': '24em',
        '90rem': '90rem',
        'img-sm': '2.5rem',

        content: 'max-content',

        'px-30': '30px',
        'px-l': '1024px',
        'px-40': '40px',

        'per-30': '30%',
        'per-33': '33%',
        'per-65': '65%',
        'per-98': '98%',

        '60vw': '60vw',
        '80vw': '80vw',
      },
      minHeight: {
        'em-3-1/4': '3.25rem',
        '85vh': '85vh',
        '48px': '48px',
      },
      maxHeight: {
        'px-425': '425px',
        '48px': '48px',

        '15vw': '15vw',
        'vw-33': '33vw',

        'em-3-1/4': '3.25rem',
        '12rem': '12rem',
        '30rem': '30rem',
        '33rem': '33rem',
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
        'bene-angels-lg': 'url(./assets/angels-lg.svg)',
        'bene-dollar-lg': 'url(./assets/dollar-lg.svg)',
        'bene-load':
          'linear-gradient(220deg, rgb(19, 182, 182), rgb(56, 124, 173), rgb(22, 206, 236))',
        'bene-dim-end':
          'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(209, 212, 213, 0.44) 20%, rgba(158, 161, 162, 0.03) 80%, rgb(0, 61, 132) 100%)',
      },
      backgroundSize: {
        load: '700% 100%',
      },
      boxShadow: {
        'c-1': '0px 6px 33px rgba(0, 0, 0, 0.16)',
      },
      rotate: { 360: '360deg' },
      animation: {
        'load-component-logo':
          '1.2s cubic-bezier(0.445, 0.050, 0.550, 0.950) infinite alternate load-component-logo',
        'open-share-box':
          'open-share-box cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both',
        'loading-bene': '3s 4s linear infinite both loading-bene',
        'loading-bene-2':
          '1.5s ease-in-out infinite alternate-reverse both loading-bene-2',
        'loading-bg':
          '10s ease 0s infinite alternate-reverse both running loading-bg',
      },
      keyframes: {
        'load-component-logo': {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          to: {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'open-share-box': {
          '0%': {
            transform: 'scaleX(0.5) scaleY(-0.5)',
            'transform-origin': '0% 0%',
            opacity: '1',
          },
          to: {
            transform: 'scaleX(1)',
            'transform-origin': '0% 0%',
            opacity: '1',
          },
        },
        'loading-bene': {
          '0%': {
            transform: 'scale(1)',
            'transform-origin': 'center center',
            'animation-timing-function': 'ease-out',
          },
          '10%': {
            transform: 'scale(.87)',
            'animation-timing-function': 'ease-in',
          },
          '17%': {
            transform: 'scale(.98)',
            'animation-timing-function': 'ease-out',
          },
          '33%': {
            transform: 'scale(.80)',
            'animation-timing-function': 'ease-in',
          },
          '45%': {
            transform: 'scale(1)',
            'animation-timing-function': 'ease-out',
          },
        },
        'loading-bene-2': {
          '0%': {
            transform: 'scale(1)',
          },
          to: {
            transform: 'scale(.5)',
          },
        },
        'loading-bg': {
          '0%': {
            'background-position': '100% 50%',
          },
          to: {
            'background-position': '0% 50%',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover', 'hover'],
      animation: ['hover', 'focus', 'group-hover'],
      margin: ['hover', 'focus', 'group-hover'],
      visibility: ['hover', 'focus', 'group-hover'],
      transform: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
    },
  },
};
