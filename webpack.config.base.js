const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "build"),
    // filename: "svg.draw.js",
    // filename: "[name].js",
    // sourceMapFilename: "[name].js.map",
    clean: true
  },
  module: {
    rules: [
      {
        test: /(\.js|\.ts)$/,
        loader: "babel-loader"
        // exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      "@svgdotjs/svg.js": path.resolve("./node_modules/@svgdotjs/svg.js")
    }
  }
};
