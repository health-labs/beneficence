/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

const customColorWCode = (rgbaColor, name, code) => {
  const rgba = rgbaColor.replace('rgba(', '').replace(')', '').split(',');
  const r = parseInt(rgba[0], 10).toString(16);
  const g = parseInt(rgba[1], 10).toString(16);
  const b = parseInt(rgba[2], 10).toString(16);
  const count = rgba.length;
  const a = count > 3 ? Math.round(rgba[3] * 255).toString(16) : 'ff';
  const rgbaVal = `#${r}${g}${b}${a}`;

  let custColorExt = {};
  custColorExt['bene-' + code + '-' + name] = rgbaVal;
  return custColorExt;
};
const customColorsLst = {
  ...customColorWCode('rgba(22, 138, 244, 0.2)', 'sky-blue', 'cmp'),
  ...customColorWCode('rgba(93, 22, 244, 0.2)', 'violet', 'cmp'),
  ...customColorWCode('rgba(74, 222, 128, 0.2)', 'green', 'cmp'),
  ...customColorWCode('rgba(251, 113, 133, 0.2)', 'rosy-red', 'cmp'),
  ...customColorWCode('rgba(52, 211, 153, 0.2)', 'emerald', 'cmp'),
  ...customColorWCode('rgba(96, 165, 250, 0.2)', 'blue', 'cmp'),
  ...customColorWCode('rgba(192, 132, 252, 0.2)', 'purple', 'cmp'),
  ...customColorWCode('rgba(244, 114, 182, 0.2)', 'pink', 'cmp'),
  ...customColorWCode('rgba(34, 211, 238, 0.2)', 'cyan', 'cmp'),
  ...customColorWCode('rgba(148, 163, 184, 0.2)', 'grey', 'cmp'),
  ...customColorWCode('rgba(232, 121, 249, 0.2)', 'violet-lt', 'cmp'),

  ...customColorWCode('rgba(22, 138, 244)', 'sky-blue', 'f'),
  ...customColorWCode('rgba(93, 22, 244)', 'violet', 'f'),
  ...customColorWCode('rgba(74, 222, 128)', 'green', 'f'),
  ...customColorWCode('rgba(251, 113, 133)', 'rosy-red', 'f'),
  ...customColorWCode('rgba(52, 211, 153)', 'emerald', 'f'),
  ...customColorWCode('rgba(96, 165, 250)', 'blue', 'f'),
  ...customColorWCode('rgba(192, 132, 252)', 'purple', 'f'),
  ...customColorWCode('rgba(244, 114, 182)', 'pink', 'f'),
  ...customColorWCode('rgba(34, 211, 238)', 'cyan', 'f'),
  ...customColorWCode('rgba(148, 163, 184)', 'grey', 'f'),
  ...customColorWCode('rgba(232, 121, 249)', 'violet-lt', 'f'),

  ...customColorWCode('rgba(255, 255, 255, 0.55)', 'opt', 'nav'),
  ...customColorWCode('rgba(255, 255, 255, 0.75)', 'hopt', 'nav'),
};

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: {
        standard: [
          /bene-(cmp|f)-sky-blue/,
          /bene-(cmp|f)-violet/,
          /bene-(cmp|f)-green/,
          /bene-(cmp|f)-rosy-red/,
          /bene-(cmp|f)-emerald/,
          /bene-(cmp|f)-blue/,
          /bene-(cmp|f)-purple/,
          /bene-(cmp|f)-pink/,
          /bene-(cmp|f)-cyan/,
          /bene-(cmp|f)-grey/,
          /bene-(cmp|f)-violet-lt/,
          /bene-nav-(opt|hopt)/,
        ],
      },
    },
  },
  content: ['./src/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    fontFamily: {
      sans: ['Inter var', 'Raleway', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      screens:{
        '2xl': '1440px',
        'mmd': '925px',
      },
      colors: {
        'bene-green-blue': '#4CEBD1',
        'bene-light-blue': '#168AF4',
        'bene-dark-blue': '#003D84',
        'bene-very-light-blue': '#AEE1F7',
        'bene-nav-blue': '#015EA1',

        'bene-dark-blue-75': '#003D84BF',

        'bene-overlay-backdrop': 'rgba(0, 0, 0, 0.86)',

        'img-ovrlay': '#000000ab',
        ...customColorsLst,
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

        "0a" : '2px',
      },
      minWidth: {
        quarter: '25vw',
        whole: '100vw !important',
        'per-30': '30%',
        'per-55': '40%',

        'em-20': '20em',

        '30px': '30px',
        '320px': '320px',

        '40vw': '40vw',
      },
      maxWidth: {
        'em-16': '16em',
        'em-15': '15em',
        'em-10': '10em',
        'em-5': '5em',
        'em-7': '7em',
        'em-3': '3em',
        'em-2': '2em',
        'em-1-hf': '1.5em',
        'em-1': '1em',
        'em-24': '24em',
        '90rem': '90rem',
        'img-sm': '2.5rem',
        '23rem': '23rem',

        'px-30': '30px',
        'px-l': '1024px',
        'px-infobox': '21rem',
        'px-40': '40px',

        'per-30': '30%',
        'per-33': '33%',
        'per-40': '40%',
        'per-50': '50%',
        'per-60': '60%',
        'per-65': '65%',
        'per-98': '98%',

        '34vw': '34vw',
        '40vw': '40vw',
        '60vw': '60vw',
        '74vw': '74vw',
        '80vw': '80vw',
      },
      minHeight: {
        'em-3-1/4': '3.25rem',
        '85vh': '85vh',
        '62px': '62px',
        '48px': '48px',
        '33px': '33px',
        'v1screen': 'calc(100vh - 30px)',
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
          'bene-on-hvr': 'linear-gradient(rgba(0, 0, 0, 0.15) 0 0)',
          'bene-cvote-bg': 'url(./assets/cvotebg.png)',
        
        },
      backgroundSize: {
        load: '700% 100%',
      },
      backgroundPosition:{
        'right-8': "center right 8rem"
      },
      boxShadow: {
        'c-1': '0px 6px 33px rgba(0, 0, 0, 0.16)',
        'c-sf': '0px 5px 28px rgba(0, 0, 0, .14), 0px 3px 15px rgba(0, 0, 0, .06)',
      },
      dropShadow: {
        'c-1': '0px 6px 33px rgba(0, 0, 0, 0.16)',
        'c-2': '2px 2px 20px rgba(0, 0, 0, 0.1)'
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
          "entrfrmbtm": "entrfrmbtm 0.3s cubic-bezier(0.23, 0.56, 0.4, 0.98) both",
          "exittobtm": "exittobtm  0.3s cubic-bezier(0.5, 0.05, 0.65, 0.16) both",
          'bginfy': 'bginfy 1s linear infinite',

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
        "entrfrmbtm": {
          "0%": {
              transform: "translateY(1000px)",
              opacity: "0"
          },
          to: {
              transform: "translateY(0)",
              opacity: "1"
          }
      },
      "exittobtm": {

        "0%": {
            transform: "translateY(0)",
            opacity: "1"
        },
        to: {
            transform: "translateY(1000px)",
            opacity: "0"
        }
    },
      'bginfy': {
        '0%': { 'background-position': '0 0' },
        '100%': { 'background-position': '1870px 0%' },
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
      backgroundImage: ['hover', 'group-hover'],
    },
  },
};
