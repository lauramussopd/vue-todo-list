//create an action que llama taslks AP

import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { createTask, fetchAllTasks, deleteTaskFromDatabase } from "@/api/tasksApi"; //nuovo
import { TASKS_FILTER_METHODS } from '@/utils/constants';
import { useUserStore } from "@/stores/userStore";

export const useTaskStore = defineStore("taskStore", () => {
  // State
  //   const tasks = ref([
  //     { id: 1, title: "buy milk", isFav: false },
  //     { id: 2, title: "buy something", isFav: false },
  //     { id: 3, title: "baciniiii", isFav: true },
  //   ]);
  const tasks = ref([]);
  const filterTaskMethod = ref(TASKS_FILTER_METHODS.ALL)

  // Getters
  const tasksFiltered = computed(() => {
    if (filterTaskMethod.value === TASKS_FILTER_METHODS.ALL) {
      return tasks.value
    }

    if (filterTaskMethod.value === TASKS_FILTER_METHODS.FAVS) {
      return tasks.value.filter(t => t.isFav)
    }
  });
  const favCount = computed(() => tasks.value.reduce((p, c) => (c.isFav ? p + 1 : p), 0));

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
      tasks.value.push(newTask); //passa l'id dell'usuario con cui devi iniziare sessione
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
  const toggleFav = (id) => {
    const task = tasks.value.find((t) => t.id === id);
    task.isFav = !task.isFav;
  };

  const changeFilterTaskMethod = (filterMethod) => {
    filterTaskMethod.value = filterMethod
  }


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
    toggleFav,
    fetchTasks,
    changeFilterTaskMethod,
  };
});
