<template>
    <h1>Lazy Load V28</h1>
    <!-- https://youtu.be/DotKZP2yOgc?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=2363 -->
    <h3>aca se usa un lazy load para la carga de la imagen pesada, esta no debe pesar mas de 500kb para que sea efectiva
        la forma de uso</h3>
    <h3>sepuede controlar el ciclo de vida o no, esto es opcional</h3>
    <img class="photo" v-lazy="{src: lazyOptions.src, lifecycle:lazyOptions.lifecycle, delay:lazyOptions.delay}" lazy="loading, error, loaded" />

    <!-- sin controlar el ciclo de vida -->
    <!-- <img class="photo"
        v-lazy="{src:'https://picsum.photos/1280/800', 
    loading:'sample.jpg',
    error:'sample.jpg',
    delay:500}" /> -->

</template>

<script setup>
    import {
        ref
    } from 'vue'
    const lazyOptions = ref({
        src: 'https://picsum.photos/1280/800',
        delay: 500,
        //el ciclo de vida viene predeterminado, de esta forma se lo puede manipular
        lifecycle: {
            loading: (el) => {
                console.log('cargando imagenm', el);
            },
            error: (el) => {
                console.log('error en la carga', el);
            },
            loaded: (el) => {
                console.log('imagen carga', el);
            },
        }
    })
</script>

<style scoped>
    .photo {
        width: 100%;
    }
    img[lazy=loading]{
        background-color: brown;
    }
    img[lazy=error]{
        background-color: rgb(255, 238, 0);
    }
    img[lazy=loaded]{
        background-color: aquamarine;
    }
</style>
