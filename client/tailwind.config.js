/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily : {
       'integral' : ['integral Cf', 'sans-serif'] ,
       'satoshi' : ['satoshi', 'sans-serif'] ,
       'satoshi-md' : ['satoshi-md', 'sans-serif'] ,
       'satoshi-bold' : ['satoshi-bold', 'sans-serif'] ,
      }
    },
  },
  plugins: [],
};

