class AutoloadRoutePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('AutoloadRoutePlugin', (
      stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */,
    ) => {
      console.log('Hello World!');
    });
  }
}

module.exports = AutoloadRoutePlugin;
