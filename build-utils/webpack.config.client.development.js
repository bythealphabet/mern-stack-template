const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

function webpackClientDevelopment(mode, name) {
  return {
    name,
    devtool: "eval-source-map",
    entry: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?reload=true",
      path.join(CURRENT_WORKING_DIR, "/client/index.js"),
    ],
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/dist/web"),
      filename: "bundle.js",
      publicPath: "/dist/web",
    },
    node: {
      fs: "empty",
    },
  };
}

module.exports = webpackServer;
