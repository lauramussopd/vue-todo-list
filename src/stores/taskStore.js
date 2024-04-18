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
    if (filterTaskMethod.value === TASKS_FILTER_METHODS.COMPLETE) {
      return tasks.value.filter(t => t.is_complete)
    }
  });
  const favCount = computed(() => tasks.value.reduce((p, c) => (c.is_fav ? p + 1 : p), 0));


  const completeCount = computed(() => tasks.value.reduce((p, c) => (c.is_complete ? p + 1 : p), 0));

  // Actions
  async function fetchTasks() {
    try {
      const data = await fetchAllTasks(); 
      tasks.value = data; 
    } catch (error) {
      console.error(error);
    }
  }
  const addTask = async (task) => {
    const userStore = useUserStore()
    try {
      const newTask = await createTask(task, userStore.user.id); 
      tasks.value.unshift(newTask); 
    } catch (error) {
      console.error(error);
    }
  };


  const deleteTask = async (id) => {
    try {
      await deleteTaskFromDatabase(id); 
      tasks.value = tasks.value.filter((t) => t.id !== id); 
    } catch (error) {
      console.error("Errore ", error);

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
    completeCount,
    // Actions
    addTask,
    deleteTask,
    fetchTasks,
    changeFilterTaskMethod,
    updateTask,
  };
});
