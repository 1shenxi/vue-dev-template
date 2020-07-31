const AutoloadRoutePlugin = require('./plugins/autoload-route-plugin');

module.exports = {
  configureWebpack: {
    plugins: [new AutoloadRoutePlugin()],
  },
};
