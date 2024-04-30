/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
  content: [
      './src/**/*.{html,ts,tsx}',
      './index.html',
  ],
  theme: {
    colors:{
        primaryBlue: "#164882",
        highlightBlue: "#10ABED",
        midBlue: "#001168",
        darkBlue:"#00153D",
        reallyDarkBlue: "#010023",
        absoluteWhite: "#FFFFFF",
        lightGray: "#EEEEEE",
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

