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
    import ContadorV18 from './components/vuex-18/ContadorV18.vue'
    import ContadorPiniaV19 from './components/pinia-V19/ContadorPiniaV19.vue'
    import PeticionesV21 from './components/peticiones-autenticadas-V21/Peticiones-V21.vue'
    import MainLayoutV24 from './layouts/MainLayoutV24.vue'
    import EjecucionDeclarativaV25View from './view/EjecucionDeclarativaV25View.vue'
    import PersistenciaViewV27 from './view/PersistenciaViewV27.vue'
    import WatchViewV27 from './view/WatchViewV27.vue'

    import {
        //  este import correspondiente a MainLayoutV24
        useMouse
    } from './composables/useMouseV24'
    import ParentComponentV28 from './components/controlDelegado-V28/ParentComponentV28.vue'
import LazyLoadV28 from './components/lazyLoad-V28/LazyLoadV28.vue'


    const {
        x,
        y
    } = useMouse();
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
        <ContadorV18 />
        <br>
        <ContadorPiniaV19 />
        <br>
        <h1>Se configura sessions y cookies V20</h1>
        <!-- <PostListV8/>  -->
        <!-- se crea un servio V8 con una solicitus async await a un JSON -->
        <!-- src\services\PostService.js -->
        <br>
        <PeticionesV21 />
        <br>
        <br>
        <h3>
            <RouterLink to="/post">PostList V8</RouterLink>
        </h3>
        <br>
        <h3>
            <RouterLink to="/auth">AuthView V12 y V13</RouterLink>
        </h3>
        <br>
        <h3>
            <RouterLink to="/login">Login V21</RouterLink>
        </h3>
        <h3>
            <RouterLink to="/dashboard">Dashboard V21</RouterLink>
        </h3>
        <br>
        <h3>
            <RouterLink to="/login-v23">Login-v23</RouterLink>
        </h3>
        <h3>
            <RouterLink to="/register-v23">Register-v23</RouterLink>
        </h3>
        <h3>
            <RouterLink to="/note-list-v23">Note-list-v23</RouterLink>
        </h3>
        <h3>
            <RouterLink to="/note-create-v23">Note-create-v23</RouterLink>
        </h3>
        <br>
        <MainLayoutV24>
            // composables
            // https://youtu.be/x996MvWwvlE?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=2033
            <template #main>
                <h5>main content</h5>
            </template>
            <template #aux>

                <h5>X position is:{{ x }}, Y position is: {{ y }}</h5>
            </template>
        </MainLayoutV24>
        <br>
        <EjecucionDeclarativaV25View />
        <br>
        <PersistenciaViewV27 />
        <br>
        <WatchViewV27 />
        <br>
        <ParentComponentV28 />
        <br>
        <LazyLoadV28/>
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
