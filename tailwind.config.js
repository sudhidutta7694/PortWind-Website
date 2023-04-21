/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
      },
      spacing:{
        "big": "35rem"
      },
      fontFamily:{
        nunito: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}

