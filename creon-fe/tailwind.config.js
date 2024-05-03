/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "rgba(13, 19, 28, 0.7)",
          "200": "rgba(19, 23, 29, 0.6)",
        },
        white: "#fff",
        "grey-line": "#13171d",
        darkslategray: {
          "100": "#454a4f",
          "200": "rgba(69, 74, 79, 0.09)",
        },
        blue: "#3d8bff",
        purple: "#ab23ff",
        "grey-text": "#46505f",
      },
      spacing: {},
      fontFamily: {
        satoshi: "Satoshi",
        "monument-extended": "'Monument Extended'",
      },
      borderRadius: {
        "81xl": "100px",
        "12xs": "1px",
      },
    },
    fontSize: {
      lg: "18px",
      "19xl": "38px",
      "11xl": "30px",
      "4xl": "23px",
      "3xl": "22px",
      xs: "12px",
      "49xl": "68px",
      "35xl": "54px",
      "22xl": "41px",
      "3xs": "10px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

