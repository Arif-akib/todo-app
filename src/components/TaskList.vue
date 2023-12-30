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
                    <p class="py-1 font-semibold">Title: {{ta.title}}</p>
                    <p class="py-1 overflow-hidden "><span class="font-semibold">Description: </span>{{ta.description}}</p>
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

const removeTask = (id) => {
       tasks.removeTask(id)
    }
</script>