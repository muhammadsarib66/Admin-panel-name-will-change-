/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Lato : ['Lato' , 'sans-serif']
      },
      fontWeight: {
        '400' : 400,
        '700' : 700,
        "900" : 900
      },
      colors: {
        HeadingText: '#1b1b1b' , // heading text color
        primary : '#494949', //  text dark grey color
        primaryText : "#ffffff", // white
        secondary: "#FDFDFD" ,// body color
        onPrimary : "#875DF8", // purple color
        onSecondary : "#EBE5FA" // cards color 

      }
    },
  },
  plugins: [],
}

