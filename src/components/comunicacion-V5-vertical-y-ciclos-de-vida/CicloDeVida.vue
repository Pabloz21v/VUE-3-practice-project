<template>
    <h1>Ciclo De Vida con Option API</h1>
</template>

<script >
import { defineComponent } from 'vue';
export default defineComponent({
    name: " CycleOption",
    // orden de ejecucion
    // created() y mounted() se cargar e entrada
    created() {
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
    updated() {
        console.log("updated");
    },
    unmounted() {
        console.log("unmounted");
    },

})
</script>

<style scoped>
</style>