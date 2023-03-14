<script setup>
    import HelloWorld from './components/HelloWorld.vue'
    import TheWelcome from './components/TheWelcome.vue'
    import PostContainer from './components/PostContainer.vue'
    import CounterOption from './components/CounterOption.vue'
    import CounterComposition from './components/CounterComposition.vue'
    import ExampleSelective from './components/ExampleSelective.vue'
    import ExampleFor from './components/ExampleFor.vue'
    import ClassBind from './components/ClassBind.vue'
    import ClassBind2 from './components/ClassBind2.vue'
    import ModelForm from './components/formularios-V4/ModelForm.vue'
    import ModelFormCheckBoxAndSelects from './components/formularios-V4/ModelFormCheckBoxAndSelects.vue'
    import EjercicioPracticoV4 from './components/formularios-V4/EjercicioPracticoV4.vue'
    import CicloDeVida from './components/comunicacion-V5-vertical-y-ciclos-de-vida/CicloDeVida.vue'
    import CicloDeVidaCompositionApi from './components/comunicacion-V5-vertical-y-ciclos-de-vida/CicloDeVidaCompositionApi.vue'
    import PostList from './components/comunicacion-V5-vertical-y-ciclos-de-vida/PostList.vue'
    import ComputedExcample from './components/datosComputados-V6/ComputedExcample.vue'
    import ComputedExample from './components/datosComputados-V6/ComputedExample.vue'
    import EjercicioV6 from './components/datosComputados-V6/EjercicioV6.vue'
    import DirectivasPersonalizadasSimles from './components/directivas-V7-personalizadas/DirectivasPersonalizadasSimles.vue'
    import DirectivasPersonalizadasConModificadores from './components/directivas-V7-personalizadas/DirectivasPersonalizadasConModificadores.vue'
    // import PostListV8 from './components/servicios-V8/PostListV8.vue'
    // import PostListV8 from './view/PostListV8.vue'
    import EstilosV9 from './components/estilos-V9/EstilosV9.vue'
    import EnrutadoV10 from './components/Enrutado-V10/EnrutadoV10.vue'
</script>

<template>
    <header>
        <h1>Vue con container de practica</h1>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />
        </div>
    </header>

    <main>
        <TheWelcome />
        <br>
        <PostContainer />
        <br>
        <CounterOption />
        <br>
        <CounterComposition />
        <br>
        <CounterComposition />
        <br>
        <ExampleSelective /> <!-- v-if v-else v-else-if v-show-->
        <br>
        <ExampleFor />
        <!-- v-for (para correr un array y objetos estilo JSON) y v-bind:key (para darle un identificador unico) -->
        <br>
        <ClassBind /> <!-- directivas video 3 -->
        <br>
        <ClassBind2 /><!-- directivas video 3 -->
        <br>
        <ModelForm /> <!-- formularios -->
        <br>
        <ModelFormCheckBoxAndSelects /><!-- formularios -->
        <br>
        <EjercicioPracticoV4 />
        <br>
        <CicloDeVida /><!-- ciclo de vida -->
        <br>
        <CicloDeVidaCompositionApi /><!-- ciclo de vida -->
        <br>
        <PostList /> <!-- comunicacion vertical  -->
        <br>
        <ComputedExcample /> <!-- Computed en option api -->
        <br>
        <ComputedExample /><!-- Computed en Composition API -->
        <br>
        <EjercicioV6 />
        <br>
        <DirectivasPersonalizadasSimles /> <!-- V7 trabajamos en el main.js -->
        <br>
        <DirectivasPersonalizadasConModificadores /> <!-- V7 trabajamos en el main.js-->
        <br>

        <EstilosV9 /><!-- estilos con bootstrap tailwind etc -->
        <br>
        <EnrutadoV10 />
        <br>
        <!-- <PostListV8/>  -->
        <!-- se crea un servio V8 con una solicitus async await a un JSON -->
        <!-- src\services\PostService.js -->
        <h3>
            <RouterLink to="/post">PostListV8</RouterLink>
        </h3>
        <br>
        <h3>
            <RouterLink to="/auth">AuthViewV12</RouterLink>
        </h3>
        <br>
        <h3>

        </h3>
        <br>
        <RouterView />
    </main>
</template>

<style scoped>
    header {
        line-height: 1.5;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    @media (min-width: 1024px) {
        header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }
    }
</style>
