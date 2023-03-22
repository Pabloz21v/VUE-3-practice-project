<template>
    <h1>Parent Component V28</h1>
    <ChildComponentV28 ref="percentageComponent"></ChildComponentV28>
    <button @click="banco">Añadir Cuanta bancaria</button>
    <h3>(soy el padre) manipulo el metodo recalculate por medio de  ref="percentageComponent" dentro de la tag del hijo en este componente padre</h3>
</template>
<!-- para ver como se ahce en opcion api y composition api -->
<!-- https://youtu.be/DotKZP2yOgc?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1609 -->
<script setup>
import ChildComponentV28 from './ChildComponentV28.vue';
import {ref} from 'vue'
const percentageComponent = ref(null)
const banco =()=> {
    percentageComponent.value.recalculate()
}

</script>

<style scoped>

</style>