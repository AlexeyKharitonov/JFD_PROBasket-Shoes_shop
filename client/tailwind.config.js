/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // base: "1rem", // 16px
        // lg: "1.125rem", // 18px
        // xl: "1.25rem", // 20px
      },
      boxShadow: {
        // blurry: "0 4px 16px rgba(0, 0, 0, 0.1)",
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        // "custom-dark": "0 2px 4px rgba(0, 0, 0, 0.2)",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
