<template>
    <div class="flex px-[5%] justify-between py-5">
        <h1 class="text-3xl font-semiboldpy-2 uppercase">Task List</h1>
        
    </div>
    
   <div 
        v-for=" ta in tasks.task" 
        :key="ta.id"
        class="px-[5%] mt-2">
        <div class="">
           <form class="border rounded-xl px-5 py-1 bg-slate-50 flex justify-between items-center">
                <div class="w-[70%]">
                    <button class="py-1 text-sm border" :class="ta.done=='Unfinished'? 'text-red-500':'text-green-500'"> {{ta.done}}</button>
                    <p class="py-1 font-semibold">Title: {{ta.title}}</p>
                    <p class="py-1 overflow-hidden "><span class="font-semibold">Description: </span>{{ta.description}}</p>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <button class="bg-orange-600 h-8 w-20 rounded-lg text-white text-sm font-semibold">Edit</button>
                    <button class="bg-red-600 h-8 w-20 rounded-lg text-white text-sm font-semibold" @click="removeTask(task)">Delete</button>
                </div>
            </form>
        </div>
   </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { taskStore } from '../store/index'

let tasks = taskStore()

onMounted(async() => {
    await tasks.task.values
})

const removeTask = task => {
       tasks.value =tasks.value.filter(t => t !== task)
    }
</script>