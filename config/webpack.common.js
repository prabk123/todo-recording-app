const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    alias: {
      Shared: path.resolve(__dirname, "../src/Components/Shared"),
      Assets: path.resolve(__dirname, "../src/Assets"),
      Actions: path.resolve(__dirname, "../src/Actions"),
      Services: path.resolve(__dirname, "../src/Services")
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets"
            }
          },
          "image-webpack-loader"
        ]
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
