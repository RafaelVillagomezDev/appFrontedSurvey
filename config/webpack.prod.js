const common = require("./webpack.common");
const path = require("path");
const { merge } = require("webpack-merge");
const prodConfig = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js", // Nombre único para fragmentos
    path: path.resolve(__dirname, "../dist"),
  },
  optimization: {
    splitChunks: {
      minSize: 17000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "_",
      enforceSizeThreshold: 30000,
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          priority: -5,
          reuseExistingChunk: true,
          chunks: "initial",
          name: "common_app",
          minSize: 0,
        },
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/, // Busca en los módulos de node
          name: "vendor",
          chunks: "all",
          priority: 10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        // estamos optando por no participar en defaultVendors, por lo que el resto de los módulos del nodo formarán parte del default cacheGroup
        defaultVendors: false,
      },
    },
  },
};

module.exports = merge(common, prodConfig);
