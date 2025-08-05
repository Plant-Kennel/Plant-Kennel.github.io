<script setup>
import HelloWorld from './components/Heading.vue'
import TheWelcome from './components/TheWelcome.vue'
import Nav from "./components/Nav.vue";
import { RouterView } from 'vue-router';
import HomeView from './components/HomeView.vue';
import Header from './components/Heading.vue';
</script>

<template>
  <Header />
  <Nav />
  <main>
    <RouterView />
    <HomeView />
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  border-left: 2px solid teal;
}
</style>
