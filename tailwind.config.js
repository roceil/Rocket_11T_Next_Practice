/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A33FF'
      },
      screens: {
        md: '767px',
        // => @media (min-width: 640px) { ... }

        lg: '900px',
        // => @media (min-width: 1024px) { ... }

        xl: '1100px'
        // => @media (min-width: 1280px) { ... }
      }
    },
    container: {
      center: true,
      padding: '20px'
    }
  },
  plugins: []
}
