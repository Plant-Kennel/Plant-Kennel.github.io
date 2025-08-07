

<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="about">About</RouterLink>
        <RouterLink to="CSSColors">CSSColors</RouterLink>
    </nav>
</template>

<style scoped>
    nav {
        background-color: cadetblue;
        list-style: none;
        display: flex;
        /* line-height: 2; */
        padding-block: .5rem;
        gap: .5rem;
        /* border-left: 2px solid teal; */
    }

    a {
        color: thistle;
        text-decoration: none;
    }
</style>