<template>
    <h1>ClassBind con v-bind aplicado a la clase de style creada</h1>
    <!-- se puede quitar el v-bind y solo dejar :class -->
    <!-- <p v-bind:class="{ -->
    <p :class="{
        'danger': hasError,
    }">El mensaje se a enviado sastifactoriamente</p>
</template>

<!-- script corto -->
<script setup>
            // con true cambia a rojo y no aplica el estilo bindeado
            let hasError = true;
            // let hasError = false;
</script>

<!-- otro modo en el video 3 de VUE, 55min del video
https://youtu.be/Ln1SN43jtG8?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=3292 -->

<!-- script largo -->
// <script>
//     import {
//         defineComponent
//     } from 'vue';

//     export default defineComponent({
//         name: 'ClassBind',
//         setup() {
//             // con true cambia a rojo y no aplica el estilo bindeado
//             let hasError = true;
//             // let hasError = false;
//             return {
//                 hasError
//             }
//         }
//     })
// </script>

<style scoped>
    .danger {
        color: red;
    }
</style>
