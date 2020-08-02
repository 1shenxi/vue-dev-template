const { resolve } = require('path');

module.exports = {
  configureWebpack: {},

  chainWebpack: config => {
    config.resolve.alias
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@utils', resolve('src/utils'));
  },
};
