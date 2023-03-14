<!-- bidireccional binding -->
<!-- v-model guarda en su variable asignada el valor en "inputText"-->
<template>
    <h1>bidireccional binding con v-model</h1>
    <form action="">
        <input type="text" v-model="inputText">
    </form>
    <br>
    <h3>{{ inputText }}</h3>
</template>

<!-- y esta luego se guarda en la ref la cual en el h3 es mostrada -->
<script setup>
import {ref} from 'vue'
    let inputText = ref('')
</script>

// la otra forma de hacerlo
// https://youtu.be/snHa8kRPjH8?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=790

<style scoped>
</style>