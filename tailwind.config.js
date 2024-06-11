/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.84rem",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "custom-purple": "#9747ff",
      },
      colors: {
        buttonColor: "#9747ff",
        backgroundColorModal: "#371b4b",
        customGradient: {
          // start: "#3c1739",
          // end: "#130e47",
          start: "#612424",
          end: "#000000",
        },
      },
      backgroundImage: (theme) => ({
        gradient:
          "linear-gradient(300deg, " +
          theme("colors.customGradient.start") +
          " 10%, " +
          theme("colors.customGradient.end") +
          " 70%)",
      }),
      animation: {
        // Ajout des deux animations
        bounce: "bounceVariant 2s infinite",
        spin: "spin 6s linear infinite",
      },
      keyframes: {
        bounceVariant: {
          "0%, 100%": {
            transform: "translateY(0%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-2%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
      },
    },
  },
};
