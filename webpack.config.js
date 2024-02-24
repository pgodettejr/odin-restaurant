// TODO: try to enable webpack as a variable along with watchFiles below as a solution to src not being recognized
// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node' <-- Does this have to do with not enabling line 5 below? (webpack require)

const path = require('path');
// const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // devtool: 'eval',
  devServer: { // Delete this if we try the peterxjang method for webpack-dev-server (also delete "start" line in package.json file)
    static: './dist',
    // watchFiles: [path.resolve(__dirname, 'src')],
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