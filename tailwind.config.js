module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#5c6bc0',
      'secondary': '#ffed4a',
      'gray': '#fcfcfc',
      'gray-lighter': 'rgba(0,0,0,.03)',
      'dark': '#333637',
      'darker': '#292b2c',
      'blue': '#0d6efd',
      'blue-darker': '#4e5ba3'
     }),

     textColor: theme => theme('colors'),
     textColor: {
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'gray-darker': '#6c757d',
       'white': '#fff',
       'white-darker': 'hsla(0,0%,100%,.55)',
       'white-darker-2': 'hsla(0,0%,100%,.75)',
       'blue': '#0d6efd',
       'blue-f': '#3b5998',
       'blue-t': '#1da1f2',
       'pink-i': '#c13584'
     },

     

    extend: {

      fontSize: {
        'xl-l': '1.2rem',
        '2': '2rem',
        '2.5':'2.5rem',
       },

      maxWidth: {
        'xsl': '22rem',
        '700': '700px',
        '350': '350px'
     },
     
      backgroundImage: theme => ({
        'circle': "url('../images/checkbox.svg')",
        'tick': "url('../images/tick.svg')"
       }),
      
       borderColor: theme => ({
         'bgray': 'rgba(0,0,0,.25)',
         'gray-lighter': 'rgba(0,0,0,.125)',
         'gray': '#ced4da',
         'blue': '#0d6efd',
         'blue-2': '#86b7fe',
         'blue-darker': '#4a569a'
      }),

      borderRadius: theme => ({
        'circle': '50%',
      }),

      boxShadow: theme => ({
        'blue': '0 0 0 0.25rem rgb(13 110 253 / 25%)'
      }),

      padding: {
        '10p': '10px'
       },

       lineHeight: {
        'tight-2': '1.2',
       },

       backgroundPosition: {
       'middle': '50%'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      backgroundImage: ['checked'],
      borderColor: ['checked'],
      borderWidth: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}
