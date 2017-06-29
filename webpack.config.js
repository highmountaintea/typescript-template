let webpack = require("webpack")
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// uglify does not support Harmony, so TS has to generate all the way down to es5 for this to work
// unless we pull uglify from github directly

module.exports = {
  entry: "./compiled/index.js",
  output: {
    filename: "dist/index.js",
    library: "TypeScriptSample",
    libraryTarget: "umd"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ],
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({sourceMap: true, minimize: true})
    // new UglifyJSPlugin()
  ]
}
