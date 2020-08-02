const requireContext = require.context;

console.log('1:>> ', require.context('./', false, /\.js$/));
console.log({ requireContext });

export function importAll(...args) {
  console.log({ require: require.context });
  const context = requireContext.call(require, ...args);
  const map = new Map();

  context.keys().forEach(item => {
    map.set(item, {
      path: context.resolve(item),
      module: context(item),
    });
  });
  return map;
}
