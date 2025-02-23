/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'teal-bg': '#E6FFFA',         // Light teal background color
        'teal-primary': '#B2DFDB',     // Primary teal color (e.g., for cards)
        'teal-secondary': '#80CBC4',   // Secondary teal color (e.g., for input fields)
        'dark-bg': '#121212',       // Dark background color
        'dark-primary': '#1E293B',   // Primary dark color (e.g., for cards)
        'dark-secondary': '#334155', // Secondary dark color (e.g., for input fields)
        'dark-text': '#E2E8F0',      // Text color in dark mode
        'light-text': '#2D3748',     // Text color in light mode
        'accent-color': '#26A69A',    // Accent color (e.g., for buttons)
      },
    },
  },
  plugins: [],
}
