/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#d2d2d2",
        tertiary: "#323232",
        "black-100": "#282828",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #d2d2d2",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg2.png')",
      },
    },
  },
  plugins: [],
};

//primary: "#050816",
//secondary: "#aaa6c3",
//tertiary: "#151030",


