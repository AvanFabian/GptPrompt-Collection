/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      keyframes: {
        'bounce-slow': {
          '0%' : {
            transform: 'translateY(0)'
          },
          '25%' : {
            transform: 'translateY(-20px)'
          },
          '50%' : {
            transform: 'translateY(0)'
          },
          '75%' : {
            transform: 'translateY(-20px)'
          },
          '100%' : {
            transform: 'translateY(0)'
          }
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}