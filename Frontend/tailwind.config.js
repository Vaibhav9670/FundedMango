module.exports = {
  content: [
    './index.html',                     // Add your root HTML file
    './src/**/*.{js,jsx,ts,tsx,html}',   // Include all JS, JSX, TS, and HTML files in the src directory
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

