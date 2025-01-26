/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
       fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        Sriracha: ['Sriracha','sans-serif'],
      },
      
    },
  },
  plugins: [],
}

