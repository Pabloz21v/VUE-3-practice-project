<template>
    <h1>Contador Pinia V19</h1>
    <h3>Se crea un store para pinia llamado counterV19</h3>
    <h3>para usar el store pinia se importa al componente o view deseado</h3>
    <h3>{{ store.countPinia }} x2 = {{ store.times2Pinia }}</h3>
    <h3>en el store.incrementPinia(1) del click el valor 1 es cuando valdra la variable val de este mentodo en store/counterV19</h3>

    <button @click="store.incrementPinia(1)">Increment</button>
</template>

<script setup>
    import {useCounterStore} from '../../store/counterV19'
    const store = useCounterStore()
</script>

<style scoped>

</style>