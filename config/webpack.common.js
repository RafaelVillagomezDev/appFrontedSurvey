const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CompressionPlugin = require("compression-webpack-plugin");

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
    clean: true,
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
    new CompressionPlugin({
      test: /\.(js|css|html|svg|json|jpg|jpeg|webp|jsx|scss|png|gif|woff|woff2|eot|ttf)$/, // Archivos que se van a comprimir
      filename: "[path][base].gz", // Nombre del archivo comprimido
      algorithm: "gzip", // Algoritmo de compresión (también puede usar 'brotliCompress')
      threshold: 10240, // Sólo comprimir archivos mayores a 10KB
      minRatio: 0.6, // Sólo comprimir archivos que puedan reducir su tamaño en un 20%
    }),

    new CleanWebpackPlugin(),
    new Dotenv(),
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
