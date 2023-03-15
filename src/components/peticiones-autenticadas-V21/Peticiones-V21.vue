<template>
    <h1>Peticiones Autenticadas y proteccion de rutas V21</h1>
    <input  type="text" v-model="note">
    <button @click="sendToServer" class="btn btn-primary">Envir nota al servidor</button>
</template>

<script setup>
// import {ref} from 'vue'

//https://youtu.be/blTAbR-SAjY?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=148
// let note = ref('')
// const sendToServer  = async () =>{
//     const rawResponse = await fetch('http://XXXXXXXXXXXx', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': 'Bearer YYYYYYY'
//         },
//         body: JSON.stringify({
//             note: note.value
//         })
//     })
    // la var response es la que recibe la info
    // const response = await rawResponse.json()
// }
</script>

<style scoped>

</style>