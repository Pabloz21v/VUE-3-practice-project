<template>
    <h1>Computed en Option API</h1>
    <div>
        <input type="text" v-model="mensaje">
        <h3> {{ mensaje }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>

<script >
import { defineComponent } from 'vue';

export default defineComponent({
    // name es el nombre del objeto
    name: 'ComputedExcample',
    data(){
        return {
            mensaje : ''
        }
    },
    computed: {
        // lo que se ingresa en el input mensaje este metodo lo hace al reves
        reverse(){
            // https://youtu.be/sXkX60PhZTk?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1907
            return this.mensaje.split('').reverse().join()
        }
    }
})
</script>

<style scoped>

</style>
