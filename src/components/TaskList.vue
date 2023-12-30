<template>
    <div class="flex px-[5%] justify-between py-5">
        <h1 class="text-3xl font-semiboldpy-2 uppercase">Task List</h1>
        
    </div>

    <div v-if="!tasks.task.length">
        <h1 class="text-center">No Task Added</h1>
    </div>

    <div v-else>
        <div 
            v-for=" ta in tasks.task" 
            :key="ta.id"
            class="px-[5%] mt-2 pb-20">
            <div class="">
            <div class="border rounded-xl px-5 py-5 bg-slate-50 flex justify-between items-center">
                    <div class="w-[70%]">
                        <p class="py-1 font-semibold">Title: {{ta.title}}</p>
                        <p class="py-1 overflow-hidden "><span class="font-semibold">Description: </span>{{ta.description}}</p>
                        <form @submit.prevent="editTask()">
                            <input type="text" 
                                placeholder="Enter title" 
                                v-model="taskTitles"
                                class="border px-5 py-1.5 rounded-xl w-full mb-2">
                            <input type="text" 
                                placeholder="Enter description" 
                                v-model="taskDescription"
                                class="border px-5 py-1.5 rounded-xl w-full mb-2">
                            <button type="submit" class="bg-green-500 p-2 rounded-xl text-white uppercase font-semibold">Confirm</button>
                        </form>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="text-sm w-8 h-8 border rounded-full font-semibold flex justify-center items-center" 
                            :class="ta.done=='Unfinished'? 'text-black border-black':'border-green-500 text-white bg-green-500'">
                        <ion-icon name="checkmark-outline"></ion-icon>
                        </button>
                        <button class="bg-orange-600 h-8 w-8 rounded-full text-white text-sm font-semibold flex justify-center items-center">
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        </button>
                        <button class="bg-red-600 h-8 w-8 rounded-full text-white text-sm font-semibold flex justify-center items-center" @click="removeTask(ta.id)">
                            <ion-icon name="trash-bin-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
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

const removeTask = (id) => {
       tasks.removeTask(id)
}

let editTask = () => {
    tasks.editTask(ta.id,taskTitles.value,taskDescription.value )
}
</script>