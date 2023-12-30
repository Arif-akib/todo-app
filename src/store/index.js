import { defineStore } from "pinia";

export const taskStore = defineStore( 'task',{
    state:()=>({
        task: [],
    }),
    actions:{
        
        addTaskToStore(value) {
            this.task.push(value);
        },

        removeTask(id) {
           this.task=this.task.filter((ta)=>ta.id !==id)
        }
    },
    persist:true
})