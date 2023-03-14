<template>
    <h1>PostDetail es el hijo de PostList</h1>
    <div class="post">
        <!-- el hijo recibe la findo del padre PostList.vue  -->
        <h3>{{ props . titulo }}</h3>
        <p>{{ props . contenido }}</p>
        <input type="text" v-model="mensaje">
        <button @click="handleClick">DI hola</button>
    </div>

</template>

<script>
    import {
        defineComponent,
        ref
    } from 'vue';

    export default defineComponent({
        name: 'PostDetail',
        // props son para la comunicacion vertical desendente osea de padre a hijo
        props: {
            titulo: {
                type: String,
                required: true
            },
            contenido: {
                type: String,
                required: false,
                // en caso de que el props de contenido no tenga nada se muestra el mensaje de default
                default: "Este post no tiene contenido"
            }
        },
        // emits para comunicacion vertical ascendente osea de hijo a padre
        emits: ["sayHi"],
        setup(props, {
            emit
        }) {
            const handleClick = () => {
                emit("sayHi", mensaje.value)
            }
            let mensaje = ref("")
            return {
                props,
                handleClick,
                mensaje
            }
        }
    })
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
