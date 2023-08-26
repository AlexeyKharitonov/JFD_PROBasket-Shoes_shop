/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        customlg: "1440px",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        105: "1.05",
      },
    },
  },
  plugins: [],
};
