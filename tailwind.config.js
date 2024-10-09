import { color } from "framer-motion";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColors: {
          main: "#1E2742",
          subColor: "#F9FAFA",
          Beige: "#E5D9BB",
          LightBeige: "#FBF8F2",
        },
      },
    },
  },
  plugins: [],
};
