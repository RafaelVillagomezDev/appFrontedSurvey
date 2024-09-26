const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "../src/index.js"), // Ruta corregida al archivo index.js
  },
  output: {
    filename: "[name].[contenthash].js", 
    chunkFilename: "[name].[contenthash].chunk.js", // Nombre único para fragmentos
    path: path.resolve(__dirname, "../dist"), // Asegúrate de que los archivos salgan a la carpeta dist
    clean: true, // Limpia la carpeta dist antes de generar nuevos archivos
    publicPath: "/", // Define la ruta pública de tu aplicación
  },
  optimization: {
    splitChunks: {
      minSize: 17000,
      minRemainingSize: 0,
      minChunks: 4,
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
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/, // React y sus dependencias
          name: "vendor",
          chunks: "all",
          priority: 10,
        },
        styles: {
          name: 'styles', 
          test: /\.css$/, 
          chunks: 'all',
          enforce: true, 
        },
        default: {
          minChunks: 4,
          priority: -20,
          reuseExistingChunk: true,
        },
        defaultVendors: false, // Deshabilitar defaultVendors para que el resto de los módulos estén en "default"
      },
    },
  },
};

module.exports = merge(common, prodConfig);
