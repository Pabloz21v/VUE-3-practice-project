<template>
    <h1>Main Layout V24</h1>
    <h3>se pueden nombrar los slots para que puedan leer diferente info</h3>
    <h3>usando dentro de un tag template v-slot:... </h3>
    <h3> ó #... reemplazando la palabra v-slot: x el #</h3>
    <div class="container">
        <div class="auxbar">
            <AuxBarV24 />
            <div class="main-content-container">
                <div class="menu">
                    <MenuSidebarV24 />
                </div>
            </div>
            <div class="main-content">
                <slot name="main"></slot>

            </div>
            <div class="aux-content">
                <slot name="aux"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AuxBarV24 from '../components/layouts-V24-slots-componentes/AuxBarV24.vue';
    import MenuSidebarV24 from '../components/layouts-V24-slots-componentes/MenuSidebarV24.vue';
</script>

<style scoped>

</style>
