<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@components/HelloWorld.vue';
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld
    msg="Hello Vue 3 + vue-router + Pinia + Vite + SCSS + ESLint + Stylelint + Prettier"
  />
  <router-link to="/about">About Page</router-link>
</template>
