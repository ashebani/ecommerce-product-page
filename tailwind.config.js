/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primaryOrange: "hsl(26, 100%, 55%)",
        primaryPaleOrange: "hsl(25, 100%, 94%)",
        secondaryVeryDarkBlue: "hsl(220, 13%, 13%)",
        secondaryDarkGrayishBlue: "hsl(219, 9%, 45%)",
        secondaryGrayishBlue: "hsl(220, 14%, 75%)",
        secondaryLightGrayishBlue: "hsl(223, 64%, 98%)",
        secondaryWhite: "hsl(0, 0%, 100%)",
        secondaryBlack: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
