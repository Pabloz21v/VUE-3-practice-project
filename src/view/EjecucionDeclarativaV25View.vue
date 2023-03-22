<template>
    <!-- https://www.youtube.com/watch?v=0WMj5t7Twos&list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&index=26 -->
    <h1>Ejecucion Declarativa V25</h1>
    <h1>Listado de Usuarios</h1>
    <input type="text" placeholder="FILTRAR USUARIO" v-model="search" @keyup="handleSearch">
    <div>
        <button @click="handleLayout(ListV25)">Ver en lista</button>
        <button @click="handleLayout(CardV25)">Ver en tarjetas</button>
        <button @click="handleLayout(TableV25)">Ver en tabla</button>
    </div>

    <component :is="layoutV25" :content="filteredUsers" />
    <!-- fin aplicar el codigo de filtrado -->
    <!-- <component :is="layoutV25" :content="users"/> -->
</template>

<script setup>
    // defineComponent para cargas sincronas
    // defineAsyncComponent para cargas asyncronas

    //otras formas de hacerlo 
    // https://youtu.be/0WMj5t7Twos?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1711
    import {
        ref,
        defineAsyncComponent
    } from 'vue'

    const ListV25 = defineAsyncComponent(() => import('../layouts/ejecucion-V25-declarativa/ListaV25.vue'))
    const CardV25 = defineAsyncComponent(() => import('../layouts/ejecucion-V25-declarativa/CardV25.vue'))
    const TableV25 = defineAsyncComponent(() => import('../layouts/ejecucion-V25-declarativa/TableV25.vue'))

    const layoutV25 = ref(ListV25)
    const handleLayout = (cmp) => layoutV25.value = cmp
    //buscador
    const search = ref('')
    const handleSearch = () => {
        filteredUsers.value = users.value.filter(item => item.name.toLowerCase().includes(search.value
        .toLowerCase()))
    }


    const users = ref([{
            name: "pablo",
            age: "50",
            position: "fullstack"
        },
        {
            name: "lucho",
            age: "66",
            position: "frontend"
        },
        {
            name: "nahu",
            age: "45",
            position: "backend"
        },
        {
            name: "jorge",
            age: "33",
            position: "frontend"
        },
        {
            name: "juani",
            age: "25",
            position: "backend"
        },

    ])

    const filteredUsers = ref([])

    filteredUsers.value = users.value
</script>

<style scoped>

</style>
