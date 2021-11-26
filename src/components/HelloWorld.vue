<script setup>
import { ref } from 'vue';

defineProps({ msg: { type: String, required: true } });

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank"> VSCode </a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank"> Volar </a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank"> Vue 3 Documentation </a>
    |
    <a href="https://sass-lang.com/documentation/" target="_blank">
      SCSS Documentation
    </a>
    |
    <a href="https://eslint.org/" target="_blank"> ESLint Documentation </a>
    |
    <a href="https://stylelint.io/" target="_blank">
      Stylelint Documentation
    </a>
    |
    <a href="https://prettier.io/docs/en/index.html" target="_blank">
      Prettier Documentation
    </a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="scss" scoped>
a {
  color: $link-color;
}
</style>
