let webpack = require("webpack")

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
  ]
}
