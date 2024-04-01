import { ref } from 'vue'
import { defineStore } from 'pinia'
import { createTasks,fetchAllTasks } from '@/api/tasksApi'
import { compileStyle } from 'vue/compiler-sfc'

//es aconsejable tener uno store por cada funcionalidad de mi pagina
/*
export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: "buy milk", isFav: false}
      {id: 1, title: "buy bread", isFav: false}
    ]
  })
})
/*
export const useTasksStore = defineStore('tasks', () => {
  // State -- pongo lo que va a ser leido 
  const tasks = ref([]) //variable reactiva de tipo array
    

  // Getters

  // Actions -- acciones que sirven para modificar el estado
  function fetchTasks() {
    try {
      tasks.value = fetchAllTasks()
    } catch (error) {
      console.error(error)
    }
  }

  return { //la funzione mi ritorna un oggetto, 
    //tutto quello che sara usato fuori da qui
    
    // State
    tasks,
    
    // Getters
    // Actions
    fetchTasks
  }
})
*/