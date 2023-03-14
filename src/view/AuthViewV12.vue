<template>
    <h1>Auth View V12 y V13</h1>
    <h3>Se loguea a un servidor y responde deacuerdo a si es true o false la coneccion</h3>
    <h3>Esto se realiza en AuthServiceV13 en services y AuthViewV12 en view</h3>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button @click.prevent="authUser" type="submit" class="btn btn-primary">Submit</button>

    </form>
    <RouterLink to="../">
        Volver atras
    </RouterLink>


</template>

<script setup>
    import AuthServiceV13 from '../services/AuthServiceV13'
    import {
        ref
    } from 'vue';

    let email = ref("")
    let password = ref("")

    const authUser = async ()=> {
        const auth = new AuthServiceV13()
        const success = await auth.login(email.value, password.value)
        if(success) {
            alert ('Exito!')
        } else {
            alert ('Login incorrecto')
        }

    }

    
</script>

<style scoped>

</style>
