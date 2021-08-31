const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //overwrites the theme font to roboto 
    //to add a new font use npm install typeface-roboto
    extend: {
      fontFamily: {
        sans: ["roboto",
         ...defaultTheme.fontFamily.sans,
        ]
      }
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
