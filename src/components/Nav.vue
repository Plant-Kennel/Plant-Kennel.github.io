

<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="about">About</RouterLink>
        <RouterLink to="CSSColors">CSSColors</RouterLink>
        <a href="home">Home</a>
        <a href="about">About</a>
        <a href="CSSColors">CSSColors</a>
    </nav>
</template>

<style scoped>
    nav {
        background-color: midnightblue;
        list-style: none;
        display: flex;
        /* line-height: 2; */
        padding-block: .5rem;
        gap: .5rem;
        border-left: 2px solid teal;
    }

    a {
        color: thistle;
        text-decoration: none;
    }
</style>