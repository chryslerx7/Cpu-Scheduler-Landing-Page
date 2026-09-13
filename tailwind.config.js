/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0a0a0a",
          green: "#4af626",
          cyan: "#00ffff",
          yellow: "#ffff00",
          orange: "#ffa500",
          red: "#ff0000",
          purple: "#bc13fe",
          white: "#ffffff",
          gray: "#333333",
        }
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
      },
      boxShadow: {
        brutalist: "4px 4px 0px 0px rgba(0,0,0,1)",
        "brutalist-hover": "2px 2px 0px 0px rgba(0,0,0,1)",
      }
    },
  },
  plugins: [],
}
