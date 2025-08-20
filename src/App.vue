<script setup lang="js">
import { RouterView } from 'vue-router';
import Nav from "./components/Nav.vue";
import Heading from './components/Heading.vue';
import { useDiceStore } from './stores/dice';
import die6 from "./components/icons/die6.vue";
// import CSSColors from "./views/CSSColors.vue";
const diceStore = useDiceStore();
// how do I display an icon based on state?

</script>

<template>
  <Heading msg="Plant Kennel"/>
  <Nav />

  <main>
    <div>
      <p>Randomize: {{ diceStore.count }}</p>
      <button @click="diceStore.randomize()">Roll</button>
    </div>
    <RouterView />
  </main>

</template>
