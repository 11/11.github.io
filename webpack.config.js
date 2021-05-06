const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
      components: path.resolve(__dirname, './src/components/'),
      fonts: path.resolve(__dirname, './src/fonts/'),
      styles: path.resolve(__dirname, './src/styles/'),
      svgs: path.resolve(__dirname, './src/svgs/'),
      utils: path.resolve(__dirname, './src/utils/'),
      views: path.resolve(__dirname, './src/views/')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ]
}