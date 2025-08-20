<script setup lang="js">
// import { RouterView } from 'vue-router';
import Nav from "./components/Nav.vue";
import Heading from './components/Heading.vue';
// import CSSColors from "./views/CSSColors.vue";

</script>

<template>
  <Heading msg="Plant Kennel"/>
  <Nav />
<!-- <CSSColors /> -->
    <RouterView />

</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  border-left: 2px solid teal;
}
</style> -->
