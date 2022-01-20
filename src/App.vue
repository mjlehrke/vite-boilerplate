<template>
  <router-view />
</template>

<style lang="scss">
@import '@styles/index';

html {
  background-color: $background-color;
}

#app {
  color: $font-color;
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
}

a {
  color: $link-color;
}
</style>
