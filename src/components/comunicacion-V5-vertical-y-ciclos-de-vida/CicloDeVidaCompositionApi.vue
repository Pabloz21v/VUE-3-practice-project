<template>
    <h1>Ciclo De Vida con Composition API</h1>
</template>

<script setup>
import {onMounted, onUpdated} from 'vue'
// onMounted() tiene funcion callback
onMounted(() => {
    console.log("Mounted")
})
onUpdated(()=>{
    console.log("Updated");
})

</script>

<style scoped>
</style>