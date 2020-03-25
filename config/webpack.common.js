const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    alias: {
      Shared: path.resolve(__dirname, "../src/components/Shared"),
      Assets: path.resolve(__dirname, "../src/assets"),
      Actions: path.resolve(__dirname, "../src/actions"),
      Services: path.resolve(__dirname, "../src/services")
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: 10 * 1024
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-url-loader",
        options: {
          limit: 10 * 1024,
          noquotes: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "image-webpack-loader",
        enforce: "pre"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
