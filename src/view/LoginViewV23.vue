<template>
    <h1>LoginViewV23</h1>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <button @click.prevent="loginUser" type="submit" class="btn btn-primary">Submit</button>
    </form>
    <RouterLink :to="{name: 'register-v23'}">Create account</RouterLink>
</template>

<script setup>
import {ref} from 'vue'
import useAuthV23 from '../store/authV23';
import router from '../router';

const store = useAuthV23()
const email = ref('')
const password = ref('')
const feedback = ref('')

const loginUser = async () => {
    const response = await store.login(email.value, password.value)
        if(response == false){
            feedback.value = "Login error"
        } else {
            router.push({name: 'note-list-v23'})
        }
}
</script>

<style scoped>

</style>
