<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/TopHeader.vue";
</script>

<template>
  <header>
    <Header />
  </header>

  <RouterView />
</template>

<style >








@media (min-width: 1024px) {




  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
