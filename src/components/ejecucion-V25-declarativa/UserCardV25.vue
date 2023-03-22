<template>
    
    <div class="card">
        <h1>User Card V25</h1>
        <h3>{{ props.content.name }}</h3>
        <p>{{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['content'])
</script>

<style scoped>
.card{
    background-color: brown;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 10px;
}
</style>