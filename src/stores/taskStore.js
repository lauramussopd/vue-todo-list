
//create an action que llama taslks AP

import { ref } from "vue";
import { defineStore } from "pinia";
import { createTasks,fetchAllTasks } from '@/api/tasksApi'; //nuovo
import { compileStyle } from 'vue/compiler-sfc'

export const useTaskStore = defineStore("taskStore", () => {
  // State
  const tasks = ref([
    { id: 1, title: "buy milk", isFav: false },
    { id: 2, title: "buy something", isFav: false },
    { id: 3, title: "baciniiii", isFav: true },
  ]);

  // Getters
  const favs = () => tasks.value.filter(t => t.isFav);
  const favCount = () => tasks.value.reduce((p, c) => c.isFav ? p + 1 : p, 0);
  const totalCount = () => tasks.value.length;

  // Actions
  
  const addTask = task => {
    tasks.value.push(task);
  };

  const deleteTask = id => {
    tasks.value = tasks.value.filter(t => t.id !== id);
  };

  const toggleFav = id => {
    const task = tasks.value.find(t => t.id === id);
    task.isFav = !task.isFav;
  };

  function fetchTasks() {
    try {
      tasks.value = fetchAllTasks()
    } catch (error) {
      console.error(error)
    }
  }

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
