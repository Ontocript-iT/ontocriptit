/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': '0.75rem',   // Example: Small text
        'base': '1rem',    // Example: Base text size
        'lg': '1.25rem',   // Example: Large text
        'xl': '1.5rem',    // Example: Extra-large text
        '2xl': '1.875rem', // Example: 2x Extra-large text
        '3xl': '2.25rem',  // Example: 3x Extra-large text
        '4xl': '3rem',     // Example: 4x Extra-large text
        '5xl': '3.75rem',  // Example: 5x Extra-large text
        '6xl': '4.5rem',   // Example: 6x Extra-large text
        '7xl': '5rem',     // Example: 7x Extra-large text
        '8xl': '6rem'      // Example: 8x Extra-large text
      },
      screens: {
        'xs': '475px', // Custom screen size
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        mainColor:'#1DA1F2',
        customOrange: '#ff5733',
        blueColor:'#152039',
        orangeColor:'#f14902' ,
        whiteColor:'#ffffff'
      }
    },
  },
  plugins: [],
}

