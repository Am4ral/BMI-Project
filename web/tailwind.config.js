/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
  content: [
      './src/**/*.{html,ts,tsx}',
      './index.html',
  ],
  theme: {
      screens: {
          'mobile': '375px',
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }

          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }

          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
      },
    colors:{
        primaryBlue: "#164882",
        highlightBlue: "#10ABED",
        midBlue: "#001168",
        darkBlue:"#00153D",
        reallyDarkBlue: "#010023",
        absoluteWhite: "#FFFFFF",
        lightGray: "#EEEEEE",
        midGray: "#D9D9D9",
        gray: "#777777",
        black: "#000000",
    },
      fontFamily: {
          'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
      },
    assetFileNames: 'src/assets/*',
    extend: {
        backgroundImage: {
            'login-bg': "url('./src/assets/login-bg.png')",
        }
    },
  },
  plugins: [],
}

