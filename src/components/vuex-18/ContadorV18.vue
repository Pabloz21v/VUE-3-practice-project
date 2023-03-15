<template>
    <h1>Vuex-V18 Contador</h1>
    <h3>instalamos VUEX con:  npm install vuex</h3>
    <h3>consumios un store en store/index.js</h3>
    <h3>{{ counter }} x 2 = {{ times2 }}</h3>
    <button @click="increment">Incremento</button>
    <h3>creamos un store con el auth service del v12 y v13 -> v18 de ejemplo</h3>
</template>



<!-- // primer ejemplo

// import { defineComponent } from 'vue'

// export default defineComponent({
//     name: 'ContadorV18',
//     computed:{
//         counter(){
//             //lee el counter desde el store index.js
//             //uso la varible global para acceder al store
//             return this.$store.state.counter
//         },
//         times2(){
//             //lee el times2 desde el store
//             return this.$store.getters.times2
//         }
//     },
//     methods:{
//         increment(){
//             //commit para enviar cambios
//             this.$store.commit('setCounter', this.counter +1)
//         }
//     }
// })
//  </script> -->


<!--  mas simplificado -->
<!-- <script >
import { defineComponent } from 'vue'
//importo estos elementos para simplicar el uso del store, mapeando los estados
import {mapMutations, mapState, mapGetters} from 'vuex'
//usamos el spread operator (...)
export default defineComponent({
    name: 'ContadorV18',
    computed:{
        ...mapState(['counter']),
        ...mapGetters(['times2'])
    },
    methods:{
        ...mapMutations(['setCounter']),
        increment(){
            //commit para enviar cambios
        this.setCounter(this.counter +1)
            
        }
    }
})
</script> -->

<!-- con composition api -->
<!-- <script >
import { defineComponent, computed } from 'vue'
import {useStore} from 'vuex'

//usamos el spread operator (...)
export default defineComponent({
    name: 'ContadorV18',
    setup(){
        const store = useStore()
        const counter= computed(()=> store.state.counter)
        const times2= computed (()=> store.getters.times2)
        const increment = ()=> store.commit('setCounter', counter.value +1)
        return {increment,counter,times2}
    }
})
</script> -->

// con el script setup partiendo de composition api
<script setup>
import { computed } from 'vue'
import {useStore} from 'vuex'

//usamos el spread operator (...)

        const store = useStore()
        const counter= computed(()=> store.state.counter)
        const times2= computed (()=> store.getters.times2)
        const increment = ()=> store.commit('setCounter', counter.value +1)
    
</script>

<style scoped>

</style>