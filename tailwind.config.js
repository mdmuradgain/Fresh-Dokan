/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container:{
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins: "'poppins', system-ui",
        roboto: "'roboto', sans-serif"
      },
      colors: {
        'primary': '#FD3C57',
        'secondary': 'green'
      },
    },
  },
  plugins: [],
}

