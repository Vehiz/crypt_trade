/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",
    },
    fontFamily: {},
  },
  extend: {
    colors: {
      customBackground: 'rgb(18, 29, 51)'
    },
    boxShadow: {
      custom: "4px 4px 6px 0 rgba(0,0,0,0.1",
    },
    borderWidth: {
      3: "3px",
      4: "4px",
    },
    backgroundImage: {
      'hero-pattern': "url('src/assets/jiggy-home-hero-gradient.jpeg')",
      "custom-background": "url('src/assets/faq-video-bg.jpg')",
      "custom-background-2": "url('src/assets/bg-img2.jpeg')",
    },
  },
  plugins: [],
};
