/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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

