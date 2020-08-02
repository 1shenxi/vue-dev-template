const context = require.context('./', false, /\.js$/);

function getFileName(str) {
  const res = str.match(/\.\/(\S*)\.js/);
  return res ? res[1].toLowerCase() : null;
}

const components = context.keys().reduce((comps, item) => {
  if (item === './index.js') return comps;
  return { ...comps, [`v-${getFileName(item)}`]: context(item).default };
}, {});

export default {
  components,

  render() {
    return (
      <div id="app" class="app">
        <v-header></v-header>
        <v-nav></v-nav>
        <router-link to="/">Home</router-link> |<router-link to="/about">About</router-link>
        <router-view></router-view>
        <v-footer></v-footer>
      </div>
    );
  },
};
