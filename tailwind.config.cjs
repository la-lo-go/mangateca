/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      purple: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fc",
        300: "#c4b5fa",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
      },
    },
    
    extend: {
      backgroundImage: {
        'oceanic-gradient': 'linear-gradient(to right top, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
      }
    }
  },
  plugins: [],
  plugins: [require("daisyui")],
  
};
