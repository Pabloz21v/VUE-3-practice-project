<template>
    <h1>Card V25</h1>
    <div class="container">
        <UserCardV25 v-for="item in props.content" :key="item.name" :content="item"/>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import UserCardV25 from '../../components/ejecucion-V25-declarativa/UserCardV25.vue';
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