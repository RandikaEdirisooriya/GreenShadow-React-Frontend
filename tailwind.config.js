module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "rgba(0, 224, 255, 0.79)",
        firstLight: "#AFA5D9",
        glassBg: "rgba(255, 255, 255, 0.1)",
        glassBorder: "rgba(255, 255, 255, 0.08)",
        bodyBackground: "linear-gradient(135deg, rgba(47, 47, 47, 0.98) 0%, #011117 100%)",
      },
      spacing: {
        headerHeight: "3rem",
        navWidth: "68px",
        navWidthExpanded: "250px",
      },
      zIndex: {
        fixed: "100",
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
