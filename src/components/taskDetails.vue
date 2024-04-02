<!-- <script>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore';

// const props = defineProps(['task']);
export default {
 props: ['task'], 
 setup() {
    const taskStore = useTaskStore()
    return{ taskStore }
 }
}
</script>

<template>
    <div class="task">
        <h3> {{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" 
            @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons"
            :class="{active: task.isFav}" 
            @click="taskStore.toggleFav(task.id)">favorite</i>
        </div>
    </div>

</template> -->

<template>
    <div class="task">
      <h3>{{ task.title }}</h3>
      <div class="icons">
        <i class="material-icons" @click="deleteTask(task.id)">delete</i>
        <i class="material-icons" :class="{ active: task.isFav }" @click="toggleFav(task.id)">favorite</i>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  import { useTaskStore } from '@/stores/taskStore';
  
  const props = defineProps(['task']);
  const taskStore = useTaskStore();

  const deleteTask = (taskId) => {
  taskStore.deleteTask(taskId);
};

const toggleFav = (taskId) => {
  taskStore.toggleFav(taskId);
};
  </script>