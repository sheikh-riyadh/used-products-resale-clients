/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        cardealer: {
          primary: '#C52829',
          secondary: '#373737',
          accent: "#3A4256",
          neutral: "#191D24",
          "base-100": "#fff",
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/banner.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
