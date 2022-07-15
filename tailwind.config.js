/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  colors: {
    'oscuro': '#323232',
    'claro': '#f5f5f5',
    'amarillo': '#e3c330',
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: [],
  },
};
