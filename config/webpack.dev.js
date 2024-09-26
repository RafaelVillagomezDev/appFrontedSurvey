const common = require("./webpack.common");
const path = require("path");
const { merge } = require("webpack-merge");
const devConfig = {
  mode: process.env.NODE_ENV || "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
    static: {
      directory: path.join(__dirname, "../src")
    },
    watchFiles: [path.join(__dirname, "../src*")],
    host: "0.0.0.0",
    compress: true,
    port: 3002,
    hot: true,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);
