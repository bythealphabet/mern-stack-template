const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CURRENT_WORKING_DIR = process.cwd();

function webpackServer(name) {
  return {
    name,
    entry: [path.join(CURRENT_WORKING_DIR, "./server/server.js")],
    target: "node",
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/dist/server"),
      filename: "server.generated.js",
      publicPath: "/dist/server",
      libraryTarget: "commonjs2",
    },
    externals: [nodeExternals()],
  };
}

module.exports = webpackServer;
