<template>
    <h1>NoteListViewV23</h1>
    <RouterLink :to="{name: 'note-create-v23' }">Create new note</RouterLink>
    <button @click.prevent="logout">Logout</button>

    <table class="table" style="color:red" v-if="notes.length > 0">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Note</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="note in notes" :key="note.id">
                <th scope="row">{{ note.id }}</th>
                <td>{{ note.content }}</td>
            </tr>
        </tbody>
    </table>
    <p v-else>No daya yet.</p>
</template>

<script setup>
import useAuthV23 from '../store/authV23';
import { ref,onMounted } from 'vue';
import router from '../router';
const store = useAuthV23()
const notes = ref([])
onMounted(async () => {
    notes.value = await store.getNotes()
})

const logout =()=>{
    store.logout()
    router.push({name:'login-v23'})
}
</script>

<style scoped>

</style>
