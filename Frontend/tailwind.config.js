/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bold: ['Bold', 'sans-serif'], 
        regular: ['Regular', 'sans-serif'],
        apple: ['Apple-regular', 'sans-serif']
      },
    },
  },
  plugins: [],
}
