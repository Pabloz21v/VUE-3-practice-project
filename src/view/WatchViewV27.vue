<template>
    <h1>Watch View V27</h1>
    <h3>se usa watch y watchEffect</h3>
    <h3>watch esta mejor que watchEffect xq efecto se activa al 
    actualizar la pantalla, en cambio watch cuando hay un cambio,
    en este ejemplo en el input </h3>
    <h1>Notas:</h1>
    <input type="text" v-model="note">
</template>
<!-- watch esta mejor que watchEffect xq efecto se activa al 
    actualizar la pantalla, en cambio watch cuando hay un cambio,
    en este ejemplo en el input -->
<script setup>
    import {
        ref,
        watch
    } from 'vue';

    const note = ref("")
    watch(note,()=> alert("Valor modificado: " + note.value))
</script>

/*
Composition con SETUP
script setup
    import {
        ref,
        watchEffect
    } from 'vue';

    const note = ref("")
        watchEffect(()=>{
            if (note.value !== "") 
            {alert("Se ha modificado el valor: " + note.value)}
        
    })
script



script
COMPOSITION API con watchEffect
    import {
        defineComponent,
        ref,
        watchEffect
    } from 'vue';
    export default defineComponent({
        setup() {
            const note = ref("")
            watchEffect(()=>{
                alert("Se ha modificado el valor: " + note.value)
            })
            return {
                note
            }
        },
    })
/script


script
    OPTION API
    import {
        defineComponent
    } from 'vue';
    export default defineComponent({
        data() {
            return {
                note: ""
            }
        },
        watch: {
            note(value, oldValue) {
                alert("Valor: " + value + " Antiguo valor: " + oldValue)
                localStorage.setItem('note', value)
            }
        }
    })
/script

*/

<style scoped>

</style>
