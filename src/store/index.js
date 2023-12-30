import { defineStore } from "pinia";

export const taskStore = defineStore( 'task',{
    state:()=>({
        task: [],
    }),
    actions:{
        
        addTaskToStore(value) {
            this.task.push(value);
        },
        
        // removeTaskt(task) {
        //    this.task=this.task.filter((task)=>task.index !=index)
        // }
    },
    persist:true
})