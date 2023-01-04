const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  devtool: (this.mode === "development" ? "source-map" : false),
  entry: './source/index.tsx',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "bundle",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        }
      }
    }
  },
  plugins: [ 
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /(?<!\.module)\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: {
                mode: "icss"
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env"
                  ],
                ],
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.module\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: {
                mode: "local",
                namedExport: false, // This disables requirement of destructuring a css import i.e. { camelCasedClassName }
                localIdentName: "[name]__[local]_[hash:base64]"
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env"
                  ],
                ],
              }
            }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset',
        generator: {
          outputPath: 'static/',
          //publicPath: '\./static/'
        }
      }
    ]
  },
  devServer: {
    liveReload: true,
    watchFiles: ["*"],
    port: 3000
  },
  resolve: {
    extensions: ['.tsx', '.ts', ".js"]
  },
  output: {
    filename: 'bundle.js',
    publicPath: '\./static/',
    sourceMapFilename: "[name]-[id].js.map",
    path: path.resolve(__dirname, 'build'),
    clean: true
  }
};