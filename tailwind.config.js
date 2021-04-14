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
          light: '#EB0A1D',
          DEFAULT: '#d9091b',
          dark: '#C40818',
        },
        secondary: {
          '100': tailwindcssColors.teal[100],
          light: '#1B52B1',
          DEFAULT: '#164496',
          dark: '#15418E',
        },
        accent: '#F09605',
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