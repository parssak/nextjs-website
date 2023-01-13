module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@parssa/universal-ui/src/components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"]
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem"
      },
      center: true
    },
    extend: {
      transitionTimingFunction: {
        spring: "cubic-bezier(.175,.885,.32,1.275)"
      },
      keyframes: {
        "hue-rotate": {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" }
        },
        "hue-rotate-reverse": {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(-360deg)" }
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0"
          }
        }
      },
      animation: {
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "hue-rotate": "hue-rotate 1s infinite linear",
        "hue-rotate-reverse-slow": "hue-rotate-reverse 4s infinite linear"
      }
    },
    universalUI: {
      sizes: [
        {
          name: "md",
          sizes: {
            x: "1rem",
            y: "0.375rem",
            text: "1rem",
            line: "1.5rem"
          }
        }
      ]
    }
  },
  variants: {},
  plugins: [require("@parssa/universal-ui/src/plugin")]
};
