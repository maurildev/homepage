const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/homepage/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.resolve(__dirname, "./src/styles/"),
      },
    },
  },
};
