const path = require("path");

const CURRENT_WORKING_DIR = process.cwd();

function webpackClientDevelopment(mode, name) {
  console.log("mode client", mode);
  return {
    name,
    devtool: "eval-source-map",
    entry: [path.join(CURRENT_WORKING_DIR, "/client/index.js")],
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/dist/web"),
      filename: "bundle.js",
      publicPath: "/dist/web",
    },
  };
}

module.exports = webpackClientDevelopment;
