const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const envPath = path.resolve(__dirname, ".env");

// Webpack configuration
module.exports = {
  stats: { children: true },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "main.bundle-[contenthash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".html", ".css", ".scss"],
    alias: {
      styles: path.resolve(__dirname, "../src/styles"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src", "index.html"),
      filename: path.join(__dirname, "../dist", "index.html"), // Ruta absoluta
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Genera un archivo CSS por entrada
      chunkFilename: "[id].[contenthash].css", // Nombre para fragmentos CSS
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
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/assets/pdf/",
            },
          },
        ],
      },
      {
        test: /\.s?css$/, // archivos .css o .scss
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
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
