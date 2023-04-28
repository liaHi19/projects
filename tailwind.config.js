/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#29a385",
      title: "#fff",
      text: "#ebebeb",
      bg: "#212730",
      bgAlt: "#30353b",
      container: "#1d222a",
      border: "#a4a6a8",
      firstGrad: "linear-gradient(0deg, bgAlt 0%, bg 100%)",
      secondGrad: "linear-gradient(180deg, bgAlt 0%, bg 100%)",
      thirdGrad: "linear-gradient(180deg, bg0%, bg 100%)",
    },
    fontFamily: {
      primary: ["var(--font-jost)", ...fontFamily.sans],
      secondary: ["var(--font-caveat)", ...fontFamily.sans],
    },
    extend: {
      shadow: {
        shadow: "5px 5px rgb(255, 255, 255 /10%)",
      },
      transition: {
        transition: "cubic-bezier(0.3, 0, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
