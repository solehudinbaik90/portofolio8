/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        "roboto-slab": ["var(--font-roboto-slab)", "serif"],
      },
      fontSize: {
        tiny: "0.875rem",
        xtiny: "0.8125rem",
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "1.5625rem",
        "5xl": "1.625rem",
        "6xl": "1.75rem",
        "7xl": "2.5rem",
      },
      colors: {
        "gray-lite": "#44566C",
        "color-910": "#A6A6A6",
        "color-810": "#F8FBFB",
        "color-990": "#212425",
        "color-50": "#C17CEB",
        oriange: "#E93B81",
        "oriange-lite": "#FD7590",
        green: "#6AB5B9",
      },
      backgroundImage: {
        homeBg: "url('/images/background/bg.jpg')",
        "homeBg-dark": "url('/images/background/bg-dark.jpg')",
      },
      boxShadow: {
        icon: "0 5px 15px rgba(0,0,0,0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
          "100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};