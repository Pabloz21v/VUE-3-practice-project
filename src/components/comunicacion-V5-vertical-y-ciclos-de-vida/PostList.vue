<template>
    <h1>PostList es el hijo de App.vue</h1>
    <div class="container">
        <!-- comunicacion vertical desendente, le estoy pasando esta info al hijo PostDetail.vue-->
        <PostDetail v-for="elm in info" :key="elm.titulo" :titulo="elm.titulo" :contenido="elm.contenido"
            @sayHi="showAlert" />
    </div>
    <div class="container">
        <!-- comunicacion vertical desendente, le estoy pasando esta info al hijo PostDetail.vue-->
        <PropsYEmitEnJSSetup v-for="elm in info" :key="elm.titulo" :titulo="elm.titulo" :contenido="elm.contenido"
            @sayHi="showAlert" />
    </div>
</template>

<script setup>
    import PostDetail from './PostDetail.vue'
    import PropsYEmitEnJSSetup from '../datosComputados-V6/PropsYEmitEnJSSetup.vue';

    let info = [{
            titulo: "post1",
            contenido: "texto1"
        },
        {
            titulo: "post2",
            contenido: "texto2"
        },
        {
            titulo: "post3",
            contenido: "texto3"
        },
        {
            titulo: "post4",
            contenido: "texto4"
        },
        {
            titulo: "post5",
            contenido: "texto5"
        }
    ]

    // comunicacion al hijo
    function showAlert(mgs) {
        alert(mgs)
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
