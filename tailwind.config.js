/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookWiz: ["cookWiz", "cursive"],
      },
      colors: {
        "cw-background": "#261F1D",
        "cw-primary": "#6F645D",
        "cw-secondary": "#DAD0C4",
        "cw-tertiary": "#A69990",
      },
    },
  },
  plugins: [require("daisyui")],
};
