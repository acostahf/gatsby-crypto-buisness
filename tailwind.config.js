const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    //overwrites the theme font to roboto 
    //to add a new font use npm install typeface-roboto
    extend: {
      fontFamily: {
        sans: ["roboto",
         ...defaultTheme.fontFamily.sans,
        ]
      },
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
