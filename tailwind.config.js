/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#936464',
        secondary: '#474747',
        button: '#649393',
        textBtn: '#FFFFFF',
        background: '#F5F5F5',
        bar: '#D9D9D9'
      }
    },
  },
  plugins: [],
}