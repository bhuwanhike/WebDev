module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        18: "repeat(18, minmax(0, 1fr))", // Defines 18 equal columns
      },
      gridTemplateRows: {
        18: "repeat(18, minmax(0, 1fr))", // Defines 18 equal rows
      },
    },
  },
};
