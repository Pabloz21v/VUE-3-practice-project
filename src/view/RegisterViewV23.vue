<template>
    <h1>RegisterViewV23</h1>
    <form>
        <div class="mb-3">
            <label for="exampleInputName1" class="form-label">User name</label>
            <input v-model="name" type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp">

        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <button @click.prevent="createUser" type="submit" class="btn btn-primary">Submit</button>
        <p style="color:red;">{{ feedback }}</p>
    </form>
    
    <RouterLink :to="{ name: 'login-v23' }">Login</RouterLink>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import useAuthV23 from '../store/authV23'
    import router from '../router';
    const store = useAuthV23()
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const feedback = ref('')

    //https://youtu.be/TqfrKULUuYY?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=2126
    const createUser = async () => {
        feedback.value = "Sending..."
        const response = await store.register(name.value, email.value, password.value)
        if (response == false) {
            feedback.value = "Error al registrar"
        } else {
            router.push({name: 'note-list-v23'})
        }
    }
</script>

<style scoped>

</style>
