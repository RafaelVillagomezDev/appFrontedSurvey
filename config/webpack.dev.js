const common=require("./webpack.common")
const path = require("path");
const {merge}=require("webpack-merge")
const devConfig={
    mode:process.env.NODE_ENV || "development",
    devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
        hot:true,
        historyApiFallback: true,
      },
    devtool:"eval-source-map"
    
}

module.exports=merge(common,devConfig);