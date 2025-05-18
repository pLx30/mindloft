/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#80B3C4',
        secondary: '#F9F5F0',
        accent: '#A7D7A7',
        textDark: '#3D3D3D',
        warning: '#D97A7A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
