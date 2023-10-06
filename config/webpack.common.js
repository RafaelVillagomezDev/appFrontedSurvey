
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Webpack configuration
module.exports = {
  stats: { children: true },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "main.bundle-[hash].js",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public", "index.html"),
      filename: "index.html",
    }),
  ],

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/, // archivos .css o .scss
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "public/assets/img/[hash].[ext]" },
          },
        ],
      },
    ],
  },
};