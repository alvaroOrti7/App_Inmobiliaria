/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{html,js,ts,jsx,tsx}",
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: "#F6FAFD",
        red: "#E42024",
        gray: "#E7E7E7",
        border: "rgb(82, 82, 85)",
        blacky: "#3D3838",
      },
      backgroundImage: {
        fondo: "url('/fondo.webp')",
        banner: "url('/banner.webp')",
      },
      fontFamily: {
        catamaran: "'Catamaran', sans-serif",
        impact: "'Anton', sans-serif;",
      },
      boxShadow: {
        sombra: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
      },
      screens: {
        "mobile": "280px",
        "mobile-steelArrows": "294px",
        "mobile-steelTittle": "378px",
      },
    },
  },
  plugins: [],
};
