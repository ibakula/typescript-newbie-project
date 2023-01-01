const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './source/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', "js"],
  },
  output: {
    filename: 'bundle.js',
    sourceMapFilename: "bundle.js.map",
    path: path.resolve(__dirname, 'build')
  },
};