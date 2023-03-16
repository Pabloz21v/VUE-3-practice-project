<template>
    <h1>NoteCreateViewV23</h1>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">My note</label>
            <input v-model="note" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text"></div>
        </div>
        <button @click.prevent="sendNote" type="submit" class="btn btn-primary">Submit</button>
    <p style="color:red;">{{ feedback }}</p>
    </form>

    
</template>

<script setup>
import { ref } from 'vue';
import useAuthV23 from '../store/authV23';
import router from '../router';
const feedback = ref('')
const store = useAuthV23()
const note = ref('')
const sendNote = async ()=>{
    const response = await store.createNote(note.value)
    if(response== false){
        feedback.value = "Error recording the note"
    } else {
        router.push({name: 'note-list-v23'})
    }
}

</script>

<style scoped>

</style>
