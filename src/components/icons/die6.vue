<script setup>
import useDiceStore from "@/stores/dice.js";
const diceStore = useDiceStore();
let count = diceStore.randomize();
</script>

<template>
    <div>
        {{count}}
    </div>
</template>