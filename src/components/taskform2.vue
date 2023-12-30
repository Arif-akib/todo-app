<template>
    <div>
        <h1>Todo App</h1>
        <h2>Hello 
            <input 
            type="text" 
            placeholder="Write Your Name" 
            v-model="name">
        </h2>

        <section>
            <h3>Create a todo</h3>

            <form @submit.prevent="addTodo">
                <h4>Write your todo list</h4>
                <input 
                    type="text" 
                    placeholder="e.g. read a book"
                    v-model="todoTitles">
                <input 
                    type="text" 
                    placeholder="e.g. read 15 pages of alchemist"
                    v-model="todoDescription">

                <input type="submit" value="Add todo">
            </form>

            {{ todos }}
        </section>
        
        <!-- <section>
            <h3>todo list</h3>
            <div v-for="todo in todosAsc">
                <label>
                    <input type="checkbox" v-model="todo.done">
                </label>

            </div>
        </section> -->
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';

const todos = ref([])
const name = ref('')

const todoTitles = ref('')
const todoDescription = ref('') 

// const todosAsc = computed(() => todos.value.sort((a, b) => {
//     return b.createdAt - a.createdAt
// }))

const addTodo = () => {
    if (todoTitles.value.trim() === '') {
        alert('Todo tile is empty')
    }
    else {
        let id = todos.value.length ? Number(todos.value[todos.value.length - 1]?.id)+1: 0;
        todos.value.push({
            id:id,
            title: todoTitles.value,
            description: todoDescription.value,
            done: false,
            createdAt : new Date().getTime()
        }) 
        console.log(todos.value);
        localStorage.setItem('todos',JSON.stringify(todos.value))
    }
    todoTitles.value = '';
    todoDescription.value = ''  
}

// watch(todos, (newVal) => {
//     localStorage.setItem('todos',JSON.stringify(newVal))
// },{deep: true})

watch(name, (newVal) => {
    localStorage.setItem('name',newVal)
})

onMounted(() => {
    name.value = localStorage.getItem('name') || '';
    todos.value = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')): []
    console.log(todos.value);
})
</script>