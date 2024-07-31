/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        blueblue: "var(--blueblue)",
        "blueblue-dark": "var(--blueblue-dark)",
        "blueblue-light": "var(--blueblue-light)",
        "blueblue-light-2": "var(--blueblue-light-2)",
        "blueblue-light-3": "var(--blueblue-light-3)",
        "blueblue-light-4": "var(--blueblue-light-4)",
        "blueblue-light-5": "var(--blueblue-light-5)",
        cyancyan: "var(--cyancyan)",
        "cyancyan-dark": "var(--cyancyan-dark)",
        "cyancyan-light": "var(--cyancyan-light)",
        "cyancyan-light-2": "var(--cyancyan-light-2)",
        "cyancyan-light-3": "var(--cyancyan-light-3)",
        darkdark: "var(--darkdark)",
        "darkdark-2": "var(--darkdark-2)",
        "darkdark-3": "var(--darkdark-3)",
        "darkdark-4": "var(--darkdark-4)",
        "darkdark-5": "var(--darkdark-5)",
        "darkdark-6": "var(--darkdark-6)",
        "darkdark-7": "var(--darkdark-7)",
        "darkdark-8": "var(--darkdark-8)",
        graygray: "var(--graygray)",
        "graygray-2": "var(--graygray-2)",
        "graygray-3": "var(--graygray-3)",
        "graygray-4": "var(--graygray-4)",
        "graygray-5": "var(--graygray-5)",
        "graygray-6": "var(--graygray-6)",
        "graygray-7": "var(--graygray-7)",
        green: "var(--green)",
        greengreen: "var(--greengreen)",
        "greengreen-dark": "var(--greengreen-dark)",
        "greengreen-light": "var(--greengreen-light)",
        "greengreen-light-2": "var(--greengreen-light-2)",
        "greengreen-light-3": "var(--greengreen-light-3)",
        "greengreen-light-4": "var(--greengreen-light-4)",
        "greengreen-light-5": "var(--greengreen-light-5)",
        "greengreen-light-6": "var(--greengreen-light-6)",
        "light-grey": "var(--light-grey)",
        "neutraldark-gray": "var(--neutraldark-gray)",
        orange: "var(--orange)",
        orangeorange: "var(--orangeorange)",
        "orangeorange-dark": "var(--orangeorange-dark)",
        "orangeorange-light": "var(--orangeorange-light)",
        "orangeorange-light-2": "var(--orangeorange-light-2)",
        "orangeorange-light-3": "var(--orangeorange-light-3)",
        "orangeorange-light-4": "var(--orangeorange-light-4)",
        "orangeorange-light-5": "var(--orangeorange-light-5)",
        pinkpink: "var(--pinkpink)",
        "pinkpink-dark": "var(--pinkpink-dark)",
        "pinkpink-light": "var(--pinkpink-light)",
        "pinkpink-light-2": "var(--pinkpink-light-2)",
        "pinkpink-light-3": "var(--pinkpink-light-3)",
        "pinkpink-light-4": "var(--pinkpink-light-4)",
        "primary-background": "var(--primary-background)",
        "primary-color": "var(--primary-color)",
        "primary-text-color": "var(--primary-text-color)",
        purplepurple: "var(--purplepurple)",
        "purplepurple-dark": "var(--purplepurple-dark)",
        "purplepurple-dark-2": "var(--purplepurple-dark-2)",
        "purplepurple-light": "var(--purplepurple-light)",
        "purplepurple-light-2": "var(--purplepurple-light-2)",
        "purplepurple-light-3": "var(--purplepurple-light-3)",
        "purplepurple-light-4": "var(--purplepurple-light-4)",
        "purplepurple-light-5": "var(--purplepurple-light-5)",
        redred: "var(--redred)",
        "redred-dark": "var(--redred-dark)",
        "redred-light": "var(--redred-light)",
        "redred-light-2": "var(--redred-light-2)",
        "redred-light-3": "var(--redred-light-3)",
        "redred-light-4": "var(--redred-light-4)",
        "redred-light-5": "var(--redred-light-5)",
        "redred-light-6": "var(--redred-light-6)",
        "secondary-color": "var(--secondary-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        stroke: "var(--stroke)",
        tealteal: "var(--tealteal)",
        "tealteal-dark": "var(--tealteal-dark)",
        "tealteal-light": "var(--tealteal-light)",
        "tealteal-light-2": "var(--tealteal-light-2)",
        "tealteal-light-3": "var(--tealteal-light-3)",
        "variable-collection-light-green":
          "var(--variable-collection-light-green)",
        white: "var(--white)",
        whitewhite: "var(--whitewhite)",
        yellowyellow: "var(--yellowyellow)",
        "yellowyellow-dark": "var(--yellowyellow-dark)",
        "yellowyellow-dark-2": "var(--yellowyellow-dark-2)",
        "yellowyellow-light": "var(--yellowyellow-light)",
        "yellowyellow-light-2": "var(--yellowyellow-light-2)",
        "yellowyellow-light-3": "var(--yellowyellow-light-3)",
        "yellowyellow-light-4": "var(--yellowyellow-light-4)",
      },
      fontFamily: {
        "body-extra-small-text-medium":
          "var(--body-extra-small-text-medium-font-family)",
        "body-extra-small-text-regular":
          "var(--body-extra-small-text-regular-font-family)",
        "body-large-bold": "var(--body-large-bold-font-family)",
        "body-large-medium": "var(--body-large-medium-font-family)",
        "body-large-regular": "var(--body-large-regular-font-family)",
        "body-large-semibold": "var(--body-large-semibold-font-family)",
        "body-medium-bold": "var(--body-medium-bold-font-family)",
        "body-medium-medium": "var(--body-medium-medium-font-family)",
        "body-medium-regular": "var(--body-medium-regular-font-family)",
        "body-medium-semibold": "var(--body-medium-semibold-font-family)",
        "body-small-medium": "var(--body-small-medium-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
        "heading-1": "var(--heading-1-font-family)",
        "heading-2": "var(--heading-2-font-family)",
        "heading-3": "var(--heading-3-font-family)",
        "heading-4": "var(--heading-4-font-family)",
        "heading-5": "var(--heading-5-font-family)",
        "heading-6": "var(--heading-6-font-family)",
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h1-mobile": "var(--heading-h1-mobile-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h2-mobile": "var(--heading-h2-mobile-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h3-mobile": "var(--heading-h3-mobile-font-family)",
        "heading-h5": "var(--heading-h5-font-family)",
        "heading-h6": "var(--heading-h6-font-family)",
        "text-medium-normal": "var(--text-medium-normal-font-family)",
      },
      boxShadow: {
        "shadow-1": "var(--shadow-1)",
        "shadow-2": "var(--shadow-2)",
        "shadow-3": "var(--shadow-3)",
        "shadow-4": "var(--shadow-4)",
        "shadow-5": "var(--shadow-5)",
        "shadow-6": "var(--shadow-6)",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "click-effect": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 20s linear infinite",
        scrollRight: "scrollRight 20s linear infinite",
        "click-effect": "click-effect 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
