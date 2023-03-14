<template>
    <h1>corriendo el v-for en un array</h1>
    <ul>
        <h3>uso de v-for y v-bind:key</h3>
        <li v-for="country in countries " v-bind:key="country">{{ country }}</li>
    </ul>
    <!-- tambien se puede abreviar quitando el v-bind y solo dejando :key funcionando igual -->
    <br>
    <ul>
        <h3>uso de v-for y :key accion y comportameinto igual al anterior</h3>
        <li v-for="country in countries " :key="country">{{ country }}</li>
    </ul>
    <br>
    <h1>corriendo el v-for en un objeto estilo JSON</h1>
    <ul>

        <li v-for="country in countries " :key="country.code">{{ country.name }}</li>
    </ul>
</template>

<script setup>
    import {
        ref
    } from 'vue';
    let countries = ref([{
            code: ' es',
            name: 'españa'
        },
        {
            code: ' fr',
            name: 'francia'
        },
        {
            code: ' al',
            name: 'alemania'
        },
        {
            code: ' po',
            name: 'portugal'
        },
        {
            code: ' ar',
            name: 'argentina'
        }
        // 'españa', 'francia', 'alemania', 'portugal', 'argentina'
    ])
</script>

<style scoped>
</style>
