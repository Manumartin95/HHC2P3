module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#5c6bc0',
      'secondary': '#ffed4a',
      'dark': '#292b2c',
      'blue': '#0d6efd'
     }),

     textColor: theme => theme('colors'),
     textColor: {
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'gray-darker': '#6c757d',
       'white': '#fff',
       'white-darker': 'hsla(0,0%,100%,.55)'
     },

     fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl-l': '1.2rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '2': '2rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },

      maxWidth: {
        none: 'none',
        0: '0rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
        'xsl': '22rem',
        '700': '700px'
     },
     
    flex: {
      '1': '1 1 0%',
      '1.1': '1 0 0%',
      '1.2': '0 0 auto',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
    },

    backgroundPosition: {
      bottom: 'bottom',
     'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
     'left-bottom': 'left bottom',
     'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
     'top-4': 'center top 1rem',
     'middle': '50%'
    },

    extend: {
      backgroundImage: theme => ({
        'test': "url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E')",
       }),
      
       borderColor: theme => ({
         'gray': '#ced4da',
         'blue': '#0d6efd',
         'blue-2': '#86b7fe'
      }),

      borderRadius: theme => ({
        'circle': '50%',
      }),

      boxShadow: theme => ({
        'blue': '0 0 0 0.25rem rgb(13 110 253 / 25%)'
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      backgroundImage: ['checked'],
      borderColor: ['checked'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
