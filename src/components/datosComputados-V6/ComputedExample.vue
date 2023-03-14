<template>
    <h1>Computed en Composition API</h1>
    <!-- https://youtu.be/sXkX60PhZTk?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=2051 -->
    <div>
        <input type="text" v-model="mensaje">
        <h3> {{ mensaje }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>

<!-- modo con setup -->
<script setup>
    import {
        ref,
        computed
    } from 'vue';
    let mensaje = ref('')
    const reverse = computed(() => mensaje.value.split('').reverse().join())
</script>


<!-- modo largo -->
// <script>
    // import { defineComponent, ref, computed} from 'vue';

    // export default defineComponent({
    //     // name es el nombre del objeto
    //     name: 'ComputedExcample',
    //     setup(){
    //         let mensaje = ref('')
    //         const reverse = computed(()=> mensaje.value.split('').reverse().join())
    //         return {mensaje, reverse}
    //     }
    // })
    // 
// </script>

<style scoped>

</style>
