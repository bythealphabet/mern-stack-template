import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
// import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.js";

const compile = (app) => {
  const publicPath = webpackConfig({ mode: "development", name: "browser" })
    .output.publicPath;

  const compiler = webpack(
    webpackConfig({ mode: "development", name: "browser" })
  );
  const middleware = webpackMiddleware(compiler, {
    publicPath,
    serverSideRender: true,
    writeToDisk(filePath) {
      return /dist\//.test(filePath);
    },
  });
  app.use(middleware);
  //   app.use(webpackHotMiddleware(compiler));
};

export default {
  compile,
};
