import { ref } from 'vue'
import { defineStore } from 'pinia'
import { createTask, fetchAllTasks } from '@/api/tasksApi'

//es aconsejable tener uno store por cada funcionalidad de mi pagina

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
