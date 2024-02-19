const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // devtool: 'eval',
  devServer: { // Delete this if we try the peterxjang method for webpack-dev-server (also delete "start" line in package.json file)
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // watch: true,

  // This is only needed if we have more than 1 entry point, which we don't currently. Delete this regardless if we try the peterxjang method for webpack-dev-server
  // optimization: { 
  //   runtimeChunk: 'single',
  // },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Why isn't the image rule below a dev dependency for Webpack in the package.json file?
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};