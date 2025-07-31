/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        light: "#FAF9F6",
        dark: "#1c1a1b",
        "light-secondary": "rgba(250, 249, 246, 0.25)",
        "dark-secondary": "rgba(18, 18, 18, 0.25)",
        glass: "rgba(250, 249, 246, 0.10)",
        "glass-stroke": "rgba(250, 249, 246, 0.25)",
      },
      backgroundImage: {
        main: "linear-gradient(50deg, #FFBFBF 50%, #C5C3FF 100%)",
      },
    },
  },
  plugins: [],
};
