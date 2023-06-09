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
      accent: "#11614d",
      accentLight: "#12755c",
      title: "#fff",
      text: "#ebebeb",
      bg: "#212730",
      bgAlt: "#30353b",
      border: "#a4a6a8",
    },
    fontFamily: {
      primary: ["var(--font-jost)", ...fontFamily.sans],
      secondary: ["var(--font-caveat)", ...fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        top: `linear-gradient(55deg, rgba(164,166,168,1) 0%, rgba(104,186,131,0.9) 24%, rgba(41,163,133,0.9192927170868347) 42%, rgba(104,186,131,0.9) 63%, rgba(164,166,168,1) 100%),
        url('../assets/bg-top.jpg')`,
        topDark: `linear-gradient(55deg, rgba(33,39,48,0.9529061624649859) 0%, rgba(104,186,131,0.9) 24%, rgba(41,163,133,0.9192927170868347) 42%, rgba(104,186,131,0.9) 63%, rgba(33,39,48,0.9473039215686274) 100%),
        url('../assets/bg-top.jpg')`,
      },
      shadow: {
        shadow: "5px 5px rgb(255, 255, 255 /10%)",
      },
      transition: {
        transition: "all 0.3s cubic-bezier(0.3, 0, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
