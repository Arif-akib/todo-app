<template>
    <div class="px-[5%] pt-10">
        <h1 class="text-3xl uppercase text-center">Add new task in list</h1>

        <form @submit.prevent="addTask" class="py-5 flex flex-col gap-2">
            <input type="text" 
            placeholder="Enter title" 
            v-model="taskTitles"
            class="border px-5 py-1.5 rounded-xl w-full">
            <input type="text" 
            placeholder="Enter description" 
            v-model="taskDescription"
            class="border px-5 py-1.5 rounded-xl w-full">
            <button type="submit" class="bg-green-500 py-2 rounded-xl text-white uppercase font-semibold">Add task</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { taskStore } from '../store/index'

const tasks = ref([])
let task = ref ([])
let taskTitles = ref('')
let taskDescription = ref('')


const addTask = () => {
    if (taskTitles.value.trim() === '') {
        alert('Title is missing')
    }
    else {
        task = taskStore();
        task.addTaskToStore({
            title: taskTitles.value,
            description: taskDescription.value,
            done: 'Unfinished',
            id: Date.now(),
        }
        )
        taskTitles.value = ''
        taskDescription.value = ''
    }
    
}
</script>