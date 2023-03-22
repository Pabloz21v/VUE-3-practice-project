<template>
    <h1>Persistencia View V27</h1>
    <h3>se instalan npm i pinia-plugin-persistedstate  para darle persistencia a los store/state</h3>
    <h3>se indica en que store/state tendra esta cualidad de persistencia en el atributo persist: true/false</h3>
    <h3>{{ store.count }}</h3>
    <button @click="store.aumento(1)">Añadir</button>
</template>
<!-- ejecutamos la persistencia instalando el paquete de persistencia -->
<!-- https://youtu.be/Huf2kwQY1F8?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=733 -->
<script setup>
import {usePersistencia} from '../store/persistenciaV27.js'
const store = usePersistencia()
store.iniciar()
</script>

<style scoped>

</style>