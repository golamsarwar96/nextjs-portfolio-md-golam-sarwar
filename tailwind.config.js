/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        accent: {
          DEFAULT: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        border: "var(--border-color)",
      },
      animation: {
        "blob-1": "blob-1 20s infinite ease-in-out alternate",
        "blob-2": "blob-2 25s infinite ease-in-out alternate-reverse",
        "blob-3": "blob-3 30s infinite ease-in-out alternate",
        "float": "float 4s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        "blob-1": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(20%, -20%) scale(1.1)" },
        },
        "blob-2": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(-20%, 20%) scale(1.05)" },
        },
        "blob-3": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(20%, 20%) scale(1.15)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
