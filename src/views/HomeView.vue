<script setup>
import IconDie1 from '@/components/icons/IconDie1.vue';
import IconDie2 from '@/components/icons/IconDie2.vue';
import IconDie3 from '@/components/icons/IconDie3.vue';
import IconDie4 from '@/components/icons/IconDie4.vue';
import IconDie5 from '@/components/icons/IconDie5.vue';
import IconDie6 from '@/components/icons/IconDie6.vue';
import IconItem from "@/components/IconItem.vue";
import { ref } from 'vue'
import { useDiceStore } from '@/stores/dice';

const diceStore = useDiceStore();
const awesome = ref(true);

const getDiceSymbol = () => {
    switch(diceStore.diceValue) {
        case 1:
            return IconDie1;
        case 2:
            return IconDie2;
        case 3:
            return IconDie3;
        case 4:
            return IconDie4;
        case 5:
            return IconDie5;
        case 6:
            return IconDie6;
        default:
            return IconDie2;

    }
}

</script>

<template>
    <h2>Home View</h2>

    <div class="dicebox">
        <!-- <p>Dice Roll: <span v-html="getDiceSymbol()"></span></p> -->
        <component :is="getDiceSymbol()" />
      <!-- <p>Randomize: {{ diceStore.diceValue }}</p> -->
      <button @click="diceStore.roll()">Roll</button>
    </div>

    <IconItem>
        <template #icon>
            <IconDie1 />
        </template>
        <template #heading>
            Roll a D6
        </template>
    </IconItem>

    <IconDie2 />
    <IconDie3 />
    <IconDie4 />
    <IconDie5 />
    <IconDie6 />

    <div class="home-view-toggle">
        <button @click="awesome = !awesome">Toggle</button>
        <h2 v-if="awesome">Summer is here!</h2>
        <h2 v-else>Oh no 😢</h2>
    </div>

</template>