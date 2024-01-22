
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


// Webpack configuration
module.exports = {
  cache: false,
  entry:{
    app:"./src/index.js"
  },
  target: ['web', 'es5'],
  stats: { children: true },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public", "index.html"),
      filename: "index.html",
      cache:false
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
      },
    },
  },
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