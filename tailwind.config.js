/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      },
      color: {
        green: '#A0FF00'
      }
    },
  },
  plugins: [],
};
