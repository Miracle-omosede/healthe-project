/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightOrange: "#fdf3e9",
        darkOrange: "#ffbc6d",
        darkBlue: "#abc7ff",
        lightBlue: "#f0f5fb",
        lightGreen: "#e8faea",
        darkGreen: "#aee6d9",
        lightPurple: "#e7e1fb",
        darkPurple: "#b494ff",
        darkGray: "#8c8b99",
        backgroundGray: "#f7f9f8",
      },
    },
  },
  plugins: [require("daisyui")],
};
