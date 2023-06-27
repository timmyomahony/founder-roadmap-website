/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F0F0E8",
        brown: "#72645C",
      },
      cursor: {
        help: "help",
      },
      borderWidth: {
        3: "3px",
      },
      scale: {
        105: "105",
      },
      fontFamily: {
        sans: ["var(--ibm-plex-sans)"],
        mono: ["var(--ibm-plex-mono)"],
        code: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "group-hover", "focus", "active"],
    scale: ["responsive", "hover", "group-hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/typography")],
};
