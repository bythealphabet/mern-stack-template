const { merge } = require("webpack-merge");

const modeConfig = (mode, name) =>
  name === "server"
    ? require(`./build-utils/webpack.config.server`)(name)
    : require(`./build-utils/webpack.config.client.${mode}`)(mode, name);

const presetConfig = require("./build-utils/loadPresets");

function webpackBaseConfig(env = {}) {
  const { mode = "production", name = "server", presets = [] } = env;

  console.log("mode", mode);
  console.log("name", name);
  console.log("presets", presets);

  return merge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
          {
            test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
            use: "file-loader",
          },
        ],
      },
    },
    modeConfig(mode, name),
    presetConfig({ mode, presets })
  );
}

module.exports = webpackBaseConfig;
