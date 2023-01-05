const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const app = express();
const config = require('./webpack.config.js')({development:true});

Object.assign(config, {
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  }
});

config.plugins.push(new LiveReloadPlugin({
  appendScriptTag: true,
  protocol: "http"
}));

const compiler = webpack(config);

app.use(/\/(?:index.html)?/, function(req, res) {
  res.sendFile(path.resolve(__dirname, "source/index.html"))
});

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: "/"
  })
);

app.listen(config.devServer.port, function () {
  console.log('Development server listening on port 3000!\n');
});