/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        mainColorContrast: '#bba06b',
        mainColor: '#183966',
        validColor: '#41984f',
        invalidColor: '#be5d4e',
        whatsappColor: '#2fd04a',

      },
    },
  },
  plugins: [],
}
