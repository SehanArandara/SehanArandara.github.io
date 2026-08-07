/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'tech-black': '#0a0a0f',
        'neon-cyan': '#00f0ff',
        'neon-purple': '#b026ff',
        'neon-green': '#39ff14',
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      }
    },
  },
  plugins: [],
}

