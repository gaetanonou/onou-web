const tailwindcssColors = require('tailwindcss/colors')
const tailwindcssForms = require('@tailwindcss/forms')
const tailwindcssAspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  theme: {
    fontFamily:{
        'title': ['Audiowide', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        primary: { 
          '100': tailwindcssColors.cyan[100],
          light: tailwindcssColors.cyan[300],
          DEFAULT: tailwindcssColors.cyan[400],
          dark: tailwindcssColors.cyan[500]
        },
        secondary: {
          '100': tailwindcssColors.teal[100],
          light: tailwindcssColors.teal[300],
          DEFAULT: tailwindcssColors.teal[400],
          dark: tailwindcssColors.teal[500],
        },
        // primary: '#151728',
        // primary: '#1A2980',
        // primary: '#616EA8',
        // primarydark: '#449FBB',
        // secondary: '#26D0CE',
        tertiary: '#7681b3'
        // white: '#FFFFFF'
      }
    },
    variants: {
      extend: {
       gradientColorStops: ['active', 'group-hover'],
      }
    },
    plugins: [
      tailwindcssForms,
      tailwindcssAspectRatio
    ]
  }
}