export default {
  functional: true,

  render() {
    return (
      <div>
        <router-link to="/">Home</router-link> |<router-link to="/about">About</router-link>
        <router-view></router-view>
      </div>
    );
  },
};
