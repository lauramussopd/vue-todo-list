//create an action que llama taslks AP

import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { createTask, fetchAllTasks, deleteTaskFromDatabase, updateTaskById } from "@/api/tasksApi"; //nuovo
import { TASKS_FILTER_METHODS } from '@/utils/constants';
import { useUserStore } from "@/stores/userStore";

export const useTaskStore = defineStore("taskStore", () => {
  // State

  const tasks = ref([]);
  const filterTaskMethod = ref(TASKS_FILTER_METHODS.ALL)

  // Getters
  const tasksFiltered = computed(() => {
    if (filterTaskMethod.value === TASKS_FILTER_METHODS.ALL) {
      return tasks.value
    }

    if (filterTaskMethod.value === TASKS_FILTER_METHODS.FAVS) {
      return tasks.value.filter(t => t.is_fav)
    }
  });
  const favCount = computed(() => tasks.value.reduce((p, c) => (c.is_fav ? p + 1 : p), 0));

  // Actions
  async function fetchTasks() {
    try {
      const data = await fetchAllTasks(); // Chiama la funzione per recuperare le task da Supabase
      tasks.value = data; // Aggiorna le task nel tuo store con i dati recuperati da Supabase
    } catch (error) {
      console.error(error);
    }
  }
  const addTask = async (task) => {
    const userStore = useUserStore()
    try {
      const newTask = await createTask(task, userStore.user.id); // Chiama la funzione per creare la task su Supabase
      tasks.value.unshift(newTask); //passa l'id dell'usuario con cui devi iniziare sessione
    } catch (error) {
      console.error(error);
    }
  };


  const deleteTask = async (id) => {
    try {
      await deleteTaskFromDatabase(id); // Chiamiamo la nuova funzione deleteTask per eliminare la task dal database
      tasks.value = tasks.value.filter((t) => t.id !== id); // Aggiorniamo lo stato locale rimuovendo la task
    } catch (error) {
      console.error("Errore ", error);
      // Gestione degli errori
    }
  };

  const changeFilterTaskMethod = (filterMethod) => {
    filterTaskMethod.value = filterMethod
  }

  const updateTask = async (taskId, taskToUpdate) => {
    try {
      const updatedTask = await updateTaskById(taskId, taskToUpdate)
      const taskIndex = tasks.value.findIndex((t) => t.id === taskId);
      tasks.value[taskIndex] = updatedTask;
    } catch(err) {
      console.error(err)
    }
  };


  // Chiamare fetchTasks al momento dell'inizializzazione dello store
  fetchTasks();

  // Return
  return {
    // State
    tasks,
    // Getters
    tasksFiltered,
    favCount,
    // Actions
    addTask,
    deleteTask,
    fetchTasks,
    changeFilterTaskMethod,
    updateTask,
  };
});
