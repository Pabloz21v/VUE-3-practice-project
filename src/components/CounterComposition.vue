<!-- no lo hace reactivo, ahi q hacerlo reactivo con REF -->
<template>
    <h1>{{ counter }}</h1>
    <button @click="addCounter">Incrementar con composition</button>
</template>

<!-- forma larga -->
<!-- <script>
    import {
        // se importa ref
        defineComponent,
        ref
    } from 'vue';
    export default defineComponent({
        name: 'CounterComposition',
        setup() {
            // se agrega ref() y dentro el valor de la variable
            let counter = ref(0);
            const addCounter = () => {
                // se agrega .value a la variable a mostrar
                counter.value++
            }
            return {
                counter,
                addCounter
            }
        }
    })
</script> -->


// forma abreviada
<script setup>
    import {
        ref
    } from 'vue';


    let counter = ref(0);
    const addCounter = () => {
        counter.value++
    }
</script>
