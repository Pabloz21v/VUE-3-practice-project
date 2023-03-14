<template>
    <h1>Ejercicio V6</h1>
    <div>
        <h3 v-custom-tamanio:lg>tambien se trabaja el V7</h3>
        <!-- aplico un cambio de tamaño de fuente parte del video
            7 trabajando en el main creando directivas personlizadas simples -->
        <label v-font-size>Subtotal</label>
        <input type="number" v-model="subtotal" />
        <!-- aca aplico la directiva personalizda custom-size y
            le doy un valor, este valor se asocia a los px  dela directiva creada -->
        <h3 v-custom-size="100">Total impuestos a pagar : {{ totalVat }} ({{ vat }}%) </h3>
    </div>
</template>

<script setup>
    import {
        computed,
        ref
    } from 'vue';


    const vat = 21
    let subtotal = ref(0)
    const totalVat = computed(() => (vat * subtotal.value) / 100)


    /*
    100----subtotal
    21-----x

    x=(21 * subtotal) / 100
    */
</script>

<style scoped>

</style>
