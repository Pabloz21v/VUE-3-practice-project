<template>
    <!-- toma el tema del video 5 y usa los imports de defineProps y define Emits  -->
    <h1>PostDetail es el hijo de PostList pero con uso de defineProps y defineEmits</h1>
    <div class="post">
        <!-- el hijo recibe la findo del padre PostList.vue  -->
        <h3>{{ props.titulo }}</h3>
        <p>{{ props.contenido }}</p>
        <input type="text" v-model="mensaje">
        <button @click="handleClick">DI hola</button>
    </div>

</template>

<script setup>
    import {
        ref,
        defineProps,
        defineEmits
    } from 'vue';

    const props = defineProps({
        titulo: String,
        contenido: String
    })

    const emit = defineEmits(
        ['sayHi']
    )

    const handleClick = () => {
        emit("sayHi", mensaje.value)
    }
    let mensaje = ref("")
</script>

<style scoped>
    .post {
        width: 300px;
        height: 200px;
        background-color: rebeccapurple;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
</style>
