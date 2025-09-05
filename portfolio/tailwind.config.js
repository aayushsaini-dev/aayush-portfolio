// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#0A0F0F",
          teal: "#14B8A6",
          orange: "#F97316",
          light: "#f5f5f5",
          slate: "#697B7C",
          gold: "#D5A406",
        },
      },
      screens: {
        "3xl": "1920px", // For 24-inch monitors
        "4xl": "2560px", // For 27-inch monitors
      },
      maxWidth: {
        "8xl": "90rem", // 1440px
        "9xl": "100rem", // 1600px
      },
    },
  },
  plugins: [],
};
