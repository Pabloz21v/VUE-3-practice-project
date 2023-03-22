<template>
    <h1>Lista V25</h1>
    <div class="container">
        <UserListV25 v-for="item in props.content" :key="item.name" :content="item"/>
    </div>
</template>

<script setup>
import UserListV25 from '../../components/ejecucion-V25-declarativa/UserListV25.vue';
import { defineProps } from 'vue';

const props = defineProps(['content'])

</script>

<style scoped>
.container {
    width: 50vw;
    display: flex;
    justify-content: space-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>