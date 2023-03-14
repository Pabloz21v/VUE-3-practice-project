<!-- directivas -->
<template>
    <!-- conveniente cuando no cambia mucho el valor -->
    <!-- para apps grandes -->
    <h3 v-if="age < 18">Eres menor de edad con v-if</h3>
    <h3 v-else-if="age == 18">Tienes 18 años con v-else-if</h3>
    <h3 v-else>Eres mayor de edad con v-else</h3>
    
    <!-- cuando cambia mucho conviene usar v-show -->
    <!-- util para cambios constantes -->
    <!-- cuando el DOM cambia mucho -->
    <!-- v-show crea una clase display none -->
    <h2 v-show=" age >= 18">Eres mayor de edad con v-show</h2>
    <h2 v-show="age > 18"> Eres menor de edad con v-show</h2>
</template>

<!-- forma simple -->
<script setup>
    let age = 18
</script>

<!-- // reemplazo <script setup> por < script > y creo un setup() dentro del defineComponent estemodo es complejo y mas largo-->
// <!-- <script >
//         import {
//             defineComponent
//         } from 'vue';
//     export default defineComponent({
//         name: 'ExampleSelective',
//         setup() {
//             let age = 18
//             return {
//                 age
//             }
//         }1
//     })
// </script>-->


<style scoped>

</style>
