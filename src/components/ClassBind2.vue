<template>
    <h1>ClassBind con v-bind aplicado al style</h1>
    <p
        v-bind:style="{
        // esta es una forma
        // 'background-color' : '#ccc'
        // otra forma mas limpia
        backgroundColor : '#ccc',
        color : colorete,
        }">
        El mensaje se a enviado sastifactoriamente
    </p>

    <!-- el shortcut de v-on:click es @click -->
    <button @click="handleClick()">Cambiar color de boton</button>
</template>

<script setup>
// para que el color sea reactivo tengo que importar una referencia ref
    import {ref} from 'vue'
    let colorete = ref('#fff')
    const handleClick = () => {colorete.value = '#ff0000'}
    // otras formas de hacer el script 
    // https://youtu.be/Ln1SN43jtG8?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=4322
</script>

<style scoped>
 
</style>
