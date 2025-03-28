module.exports = {
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100px)" },
        },
      },
      animation: {
        moveRight: "move 1s ease-in-out infinite alternate",
      },
    },
  },
};
