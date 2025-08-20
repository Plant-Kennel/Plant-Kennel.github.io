<script setup lang="js">
import { RouterView } from 'vue-router';
import Nav from "./components/Nav.vue";
import Heading from './components/Heading.vue';


</script>

<template>
  <Heading msg="Plant Kennel"/>
  <Nav />

  <main>
    <RouterView />
  </main>

</template>
