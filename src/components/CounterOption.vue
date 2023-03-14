<!-- con OPTION API -->
<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script>
    import {
        defineComponent
    } from 'vue';

    export default defineComponent({
        name: 'CounterOption',
        components: {}, // ej::: components: {MiComponente1, MiComponente2, MiComponente3},
        data() {
            let counter = 0;
            return {
                counter
                
            }
            // otro modo es asignar a counter el valor 0 de entrada dentro del return
            // return{
            //     counter: 0
            // }
        },
        methods: { //option API
            addCounter() {
                this.counter++
            }
        }
    })
</script>

<style scoped>
</style>
