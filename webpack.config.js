const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "main.bundle.js",
  },
};
