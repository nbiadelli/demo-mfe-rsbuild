/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../producers/header-mfe/src/**/*.{js,jsx,ts,tsx}',
    '../producers/cards-mfe/src/**/*.{js,jsx,ts,tsx}',
    '../producers/footer-mfe/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
