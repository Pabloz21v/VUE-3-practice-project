<!-- bidireccional binding -->
<!-- v-model guarda en su variable asignada el valor en "inputText"-->
<!-- CheckBox y Selects -->
<template>
    <h1>bidireccional binding con v-model chekboxs y select options</h1>
    <form action="">
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="agree"/> Acepto los terminos y condiciones
        <br>
        <select v-model="country">
            <!-- si eliminalos value="" toma de forma automaticamente el valor dentro el tag -->
            <!-- <option value="España">España</option>
            <option value="Argentina">Argentina</option>
            <option value="Alemania">Alemania</option> -->

            <option >España</option>
            <option >Argentina</option>
            <option >Alemania</option>
        </select>
    </form>
    <br>
    <h3>{{ inputText }}</h3>
</template>

<script setup>
    import {ref} from 'vue'
    let inputText = ref('')
    let agree = ref(true)
    let country = ref('España')
</script>


<!-- modo para los 2 imputs sin el select -->
<!-- <script >
    import {
        defineComponent
    } from 'vue'
    
    export default defineComponent({
        data() {
            return {
                inputText: '',
                agree: true
            }
        }
    })
</script> -->

// la otra forma de hacerlo
//

<style scoped>
</style>
