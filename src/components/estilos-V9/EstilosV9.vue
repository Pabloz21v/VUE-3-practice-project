<template>
    <h1 class="color-red">Estilos V9 </h1>
    <h3>se instala un pre procesador desde el inicio del proyecto como sass </h3>
    <h3>se tiene que poner el lenguaje con el que trabaja, para este caso 
    se agrega al style scoped lang="scss" </h3>

    <h3>otra formas mas global es crear un carpeta scss luego de su instaacion y en ella crear archivos .scss</h3>
    <h3> y en ella crear las varibles con sus colores etc</h3>
    <h3>src\scss\_variables.scss</h3>
    <button class="btn btn-primary">bootstrap instalado</button>

</template>

<script setup>

</script>

<style scoped lang="scss">
    $red: #ff0000;
.color-red{
    color: $red
}
</style>