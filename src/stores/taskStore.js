//create an action que llama taslks AP

import { ref } from "vue";
import { defineStore } from "pinia";
import { createTask, fetchAllTasks } from "@/api/tasksApi"; //nuovo
import { compileStyle } from "vue/compiler-sfc";

export const useTaskStore = defineStore("taskStore", () => {
  // State
  //   const tasks = ref([
  //     { id: 1, title: "buy milk", isFav: false },
  //     { id: 2, title: "buy something", isFav: false },
  //     { id: 3, title: "baciniiii", isFav: true },
  //   ]);
  const tasks = ref([]);

  // Getters
  const favs = () => tasks.value.filter((t) => t.isFav);
  const favCount = () => tasks.value.reduce((p, c) => (c.isFav ? p + 1 : p), 0);
  const totalCount = () => tasks.value.length;

  // Actions

  const addTask = async (task) => {
    try {
      await createTask(task); // Chiama la funzione per creare la task su Supabase
      tasks.value.push(task);
    } catch (error) {
      console.error(error);
    }
  };


  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((t) => t.id !== id);
  };

  const toggleFav = (id) => {
    const task = tasks.value.find((t) => t.id === id);
    task.isFav = !task.isFav;
  };


  async function fetchTasks() {
    try {
      const data = await fetchAllTasks(); // Chiama la funzione per recuperare le task da Supabase
      tasks.value = data; // Aggiorna le task nel tuo store con i dati recuperati da Supabase
    } catch (error) {
      console.error(error);
    }
  }

  // Chiamare fetchTasks al momento dell'inizializzazione dello store
  fetchTasks();

  // Return
  return {
    // State
    tasks,
    // Getters
    favs,
    favCount,
    totalCount,
    // Actions
    addTask,
    deleteTask,
    toggleFav,
    fetchTasks,
  };
});
