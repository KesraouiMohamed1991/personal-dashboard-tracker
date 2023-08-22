/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./**/*.{html,js}"], // Specifies the files to watch for styles
  theme: {
    extend: {
      colors: {
        dark: {
          'bg-slate-800': '#1F2937', // Custom dark background color
          'text-slate-300': '#CBD5E0', // Custom dark text color
        },
        baseLight: {
          'lighter': '#E5E7EB', // Custom light background color
          'darker': '#2D3748',  // Custom dark background color
          'special': '#97ea53'    // Custom special color
        },
      },
      fontFamily: {
        sans: ['Raleway', 'Arial', 'sans-serif'], // Custom font stack
      },
    },
  },
  plugins: [], // No additional plugins used
  darkMode: "class", // Enables dark mode with class-based activation


};
