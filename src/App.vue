<script setup>
import { RouterView } from 'vue-router';
import Nav from "./components/Nav.vue";
import HomeView from './components/HomeView.vue';
import Heading from './components/Heading.vue';
</script>

<template>
  <Heading msg="Plant Kennel"/>
  <Nav />
  <main>
    <HomeView />
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  border-left: 2px solid teal;
}
</style>
