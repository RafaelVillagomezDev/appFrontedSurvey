const common=require("./webpack.common")
const {merge}=require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig={
    mode:'production',
    devtool:"source-map",
    module: {
        rules: [
          {
            test: /\.(css|scss|sass)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
      },
      optimization: {
        splitChunks: {
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                    name: 'vendor-react',
                    chunks: 'all',
                  },
            },

            chunks:"all"
        },
      },
    plugins: [new MiniCssExtractPlugin()],
}

module.exports=merge(common,prodConfig);