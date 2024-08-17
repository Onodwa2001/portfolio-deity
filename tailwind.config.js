/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  theme: {
    extend: {
      colors: {
        neon: '#00FFFF', // Neon Cyan
        darkGray: '#1a1a1a',
        deepBlue: '#0000FF',
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
