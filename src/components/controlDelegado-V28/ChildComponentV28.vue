<template>
    <h1>Child Componenet V28</h1>
    <h1>Porcentje Completado: {{ percentage }}%</h1>
    <h3>el metodo importado defineExpose permite que  una variable/funcion sea manipulada desde el padre en este caso el metodo recalculate</h3>
</template>
<!-- para ver como se ahce en opcion api y composition api -->
<!-- https://youtu.be/DotKZP2yOgc?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1609 -->
<script setup>
    import {
        onMounted,
        ref,
        defineExpose
    } from 'vue'
    const percentage = ref(0)

    onMounted(() => {
        percentage.value = 24
    })
    const recalculate = ()=> {
        percentage.value=42
    }
    defineExpose({recalculate})
</script>

<style scoped>

</style>
