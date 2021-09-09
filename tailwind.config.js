const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    scale: {
      '0': '0',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
     '95': '.95',
      '100': '1',
     '105': '1.05',
     '110': '1.1',
      '125': '1.25',
      '150': '1.5',
     '200': '2',
    },
    //overwrites the theme font to roboto 
    //to add a new font use npm install typeface-roboto
    extend: {
      fontFamily: {
        sans: ["roboto",
         ...defaultTheme.fontFamily.sans,
        ]
      },
      transform: ['hover', 'focus'],
      animation: ['motion-reduce'],
      scale: ['active', 'group-hover'],
      backgroundImage: theme => ({
        'hero-pic': "url('../images/hero-pic.jpg')",
        
       }),
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
