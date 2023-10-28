/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    boxShadow: {
      'custom':'4px 4px 6px 0 rgba(0,0,0,0.1',
    },
    borderWidth: {
      '3': '3px',
      '4': '4px',
    },
    backgroundImage: {
      'custom-background': "url('src/assets/faq-video-bg.jpg')",
    },
  },
  plugins: [],
}
