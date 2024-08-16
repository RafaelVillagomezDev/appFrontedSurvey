const path = require("path");
const HtmlWebpackPlugin =require("html-webpack-plugin")
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
    filename: "main.bundle-[hash].js",
    clean: true,

  },
  

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src", "index.html"),
      filename: "index.html",
      hash:true
    }),
    new MiniCssExtractPlugin(
      {
        filename: '[name].css', // Genera un archivo CSS por entrada
      }
    ),
    
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
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/assets/pdf/',
            },
          },
        ],
      },
      {
        test: /\.s?css$/, // archivos .css o .scss
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
        
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
