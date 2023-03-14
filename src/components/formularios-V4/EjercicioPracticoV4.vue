<template>
    <h1>Ejercicio practico V4</h1>
    <!-- https://youtu.be/snHa8kRPjH8?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1877 -->

    <section>
        <h3>Añadir profesor</h3>
        <div>
            <label for="">Nombre:</label>
            <input type="text" v-model="teacher.teacherName">
        </div>
        <div>
            <label for="">Apellido:</label>
            <input type="text" v-model="teacher.surname">
        </div>
        <div>
            <label for="">DNI:</label>
            <input type="text" v-model="teacher.dni">
        </div>
        <div>
            <label for="">Materias:</label>
            <input type="text" v-model="subject">
            <!-- modo 1 -->
            <!-- <button v-on:click="handleSubject">agregar</button> --> 
            <!-- modo 2 -->
            <button @click="handleSubject()">agregar</button>
        </div>
        <div>
            <ul>
                <li v-for="(element, index) in teacher.subjects" v-bind:key="index">
                    {{ element }}
                </li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc"/> Documentacion entregada
        <button @click="handleAddTeacher()">agregar</button>
    
    </section>
    <section>
        <h3>Lista de profesores</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Materias</th>
                <th>Documentacion entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <th>{{ elm.teacherName }}</th>
                <th>{{ elm.surname }}</th>
                <th>{{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in elm.subjects" :key="index" >
                            {{ item }}
                        </li>
                    </ul>
                </th>
                <th v-if="elm.doc">Entregada</th>
                <th v-else>No entregada</th>

            </tr>
        </table>
    </section>

</template>


<script setup>
import {ref} from 'vue'
let teacher = ref({
    teacherName: '',
    surname: '',
    dni: '',
    subjects: [],
    doc: false
})

let teachers = ref([])

let subject = ref('')

const handleSubject = () => {
    teacher.value.subjects.push(subject.value)
    subject.value = ""
}

const handleAddTeacher = () => {
    teachers.value.push({
        teacherName: teacher.value.teacherName ,
        surname: teacher.value.surname,
        dni: teacher.value.dni,
        subjects: teacher.value.subjects,
        doc: teacher.value.doc
    })
    teacher.value.teacherName = ""
    teacher.value.surname = ""
    teacher.value.dni = ""
    teacher.value.subjects = []
    teacher.value.doc = false
}
</script>

<style scoped>
</style>
