/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require("tailwindcss/defaultTheme"); 
module.exports = { 
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js", 
  ], 
  theme: { 
    extend: {}, 
    screens: { 
      phone: "240px", 
      Tab: "918", 
      ...defaultTheme.screens, 
    }, 
  }, 
  plugins: [require("flowbite/plugin")], 
};