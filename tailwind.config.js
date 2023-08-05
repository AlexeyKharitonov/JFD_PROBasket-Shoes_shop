/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        blurry: "0 0 5px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
