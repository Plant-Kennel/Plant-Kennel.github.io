<script setup>
import IconDie1 from '@/components/icons/IconDie1.vue';
import IconDie2 from '@/components/icons/IconDie2.vue';
import IconDie3 from '@/components/icons/IconDie3.vue';
import IconDie4 from '@/components/icons/IconDie4.vue';
import IconDie5 from '@/components/icons/IconDie5.vue';
import IconDie6 from '@/components/icons/IconDie6.vue';
import IconItem from "@/components/IconItem.vue";
import IconList from "@/components/IconList.vue";

function getDie() {
    let diceArray = [];
    return;
}
import { ref } from 'vue'

const awesome = ref(true)
</script>

<template>
    <h2>Home View</h2>

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

    <IconList />
</template>